import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import twilio from "twilio";
import validator from "validator";
import userModel from "../models/user-model.js";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// login user
const loginUser = async (req, res) => {
  const { password, phone } = req.body;

  if (!phone || !password) {
    return res
      .status(400)
      .json({ success: false, message: "شماره و رمز عبور مورد نیاز است" });
  }

  try {
    if (!validator.isMobilePhone(phone, "fa-IR")) {
      return res
        .status(400)
        .json({ success: false, message: "فرمت شماره همراه معتبر نیست" });
    }

    const user = await userModel.findOne({ phone });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "شماره یا رمز عبور نادرست است" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "شماره یا رمز عبور نادرست است" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطای سرور" });
  }
};

// register user
const registerUser = async (req, res) => {
  const { name, password, phone, email } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "نام را وارد کنید" });
  }

  if (!phone) {
    return res
      .status(400)
      .json({ success: false, message: "شماره همراه را وارد کنید" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "رمز ورود را وارد کنید" });
  }

  if (!validator.isMobilePhone(phone, "fa-IR")) {
    return res
      .status(400)
      .json({ success: false, message: "فرمت شماره همراه معتبر نیست" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ success: false, message: "رمز عبور باید حداقل 6 کاراکتر باشد" });
  }

  try {
    const existingUser = await userModel.findOne({ phone });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "کاربر از قبل وجود دارد" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "365d",
    });

    // const formattedPhone = phone.startsWith("0")
    //   ? `+98${phone.slice(1)}`
    //   : phone;

    // await client.messages.create({
    //   body: `سلام ${name} عزیز، به ${process.env.SHOPPING_NAME} خوش آمدید.`,
    //   from: process.env.TWILIO_PHONE_NUMBER,
    //   to: formattedPhone,
    // });

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطای سرور" });
  }
};

const getUser = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "کاربر یافت نشد." });
    }
    console.log(user);
    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "خطا در پیدا کردن کاربر." });
  }
};

export { loginUser, registerUser, getUser };
