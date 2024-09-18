import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "لطفا اول وارد شوید " });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = tokenDecode.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "شما خارج شدید" });
  }
};

export default authMiddleware;
