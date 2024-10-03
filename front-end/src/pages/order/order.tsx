import { ChangeEventHandler, useEffect, useMemo, useState, FC } from "react";
import { OrderContainer } from "./order.style";
import { toast } from "react-toastify";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { Button, RingLoader } from "components";
import { Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state-manager/store";
import { GETProductList } from "api/product";
import { changeProducts } from "state-manager/reducer/product";
import { changeUserCart } from "state-manager/reducer/profile";
import { POSTOrder } from "api/order";
import { GETUserCart } from "api/user";
import { useSearchParams } from "react-router-dom";

interface OrderProps {}

const Order: FC<OrderProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { productsList } = useSelector((state: RootState) => state.product);
  const { cartItems, token } = useSelector((state: RootState) => state.profile);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    zipCode: "",
    file: null as File | null,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null); // پیش‌نمایش تصویر

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "file" && files) {
      setData({ ...data, file: files[0] });
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewImage(fileReader.result as string); // نمایش تصویر آپلود شده
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const validation = () => {
    const { firstName, lastName, address, zipCode, phone, file } = data;
    if (!firstName.trim()) {
      toast.error("نام خود را وارد کنید.");
      return false;
    }
    if (!lastName.trim()) {
      toast.error("نام خانوادگی خود را وارد کنید.");
      return false;
    }
    if (!address.trim()) {
      toast.error("آدرس خود را وارد کنید.");
      return false;
    }
    if (!zipCode.trim() || !/^\d{10}$/.test(zipCode)) {
      toast.error("کد پستی باید ۱۰ رقم باشد.");
      return false;
    }
    if (!phone.trim() || !/^09\d{9}$/.test(phone)) {
      toast.error("شماره تلفن وارد شده معتبر نیست.");
      return false;
    }
    if (!file) {
      toast.error("لطفا رسید واریزی را اپلود کنید.");
      return false;
    }
    return true;
  };

  const totalAmount = useMemo(() => {
    let total = 0;
    for (const item in cartItems) {
      const itemInfo = productsList?.find((product) => product._id === item);
      if (itemInfo) {
        total += itemInfo.price * cartItems[item];
      }
    }
    return total;
  }, [cartItems, productsList]);

  const placeOrder = () => {
    if (validation()) {
      let orderItems: any = [];
      productsList?.forEach((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = { ...item, quantity: cartItems[item._id] };
          orderItems.push(itemInfo);
        }
      });

      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("address", data.address);
      formData.append("zipCode", data.zipCode);
      formData.append("phone", data.phone);
      if (data.file) {
        formData.append("paymentImage", data.file);
      }
      formData.append("items", JSON.stringify(orderItems));
      formData.append("amount", `${totalAmount}`);

      POSTOrder(formData).then((res) => {
        console.log(res);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          zipCode: "",
          phone: "",
          file: null,
        });
        setPreviewImage(null);
        toast.success("سفارش با موفقیت ثبت شد.");
        navigate("/orders");
      });
    }
  };

  useEffect(() => {
    GETProductList({}).then((res) => dispatch(changeProducts(res)));
    if (token) {
      GETUserCart().then((res) => dispatch(changeUserCart(res)));
    }
    setIsLoading(false);
  }, [token]);

  if (isLoading) return <RingLoader />;

  return (
    <OrderContainer>
      <div
        className="d-flex justify-content-end my-3 gap-1 pointer"
        onClick={() => navigate(-1)}
      >
        <p>بازگشت</p>
        <IoIosArrowBack size={20} />
      </div>
      <div className="place_order">
        <div className="place_order_left">
          <p className="title">جزییات خرید شما</p>
          <div className="multi_fields">
            <input
              name="firstName"
              onChange={onChangeForm}
              value={data.firstName}
              type="text"
              placeholder="نام"
            />
            <input
              name="lastName"
              onChange={onChangeForm}
              value={data.lastName}
              type="text"
              placeholder="نام خانوادگی"
            />
          </div>
          <input
            name="email"
            onChange={onChangeForm}
            value={data.email}
            type="text"
            placeholder="ایمیل"
          />
          <textarea
            name="address"
            onChange={
              onChangeForm as unknown as ChangeEventHandler<HTMLTextAreaElement>
            }
            value={data.address}
            rows={5}
            placeholder="آدرس کامل"
          />
          <div className="multi_fields">
            <input
              name="zipCode"
              onChange={onChangeForm}
              value={data.zipCode}
              type="text"
              placeholder="کد پستی"
            />
            <input
              name="phone"
              onChange={onChangeForm}
              value={data.phone}
              type="text"
              placeholder="شماره همراه"
            />
          </div>
          <Alert variant="warning">لطفا عکس رسید را آپلود کنید</Alert>
          <input name="file" type="file" onChange={onChangeForm} />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="image-preview" />
          )}
        </div>
        <div className="place_order_right">
          <div className="cart_total">
            <h2>جمع سبد خرید</h2>
            <div className="cart_total_details">
              <p>جمع فرعی</p>
              <p>{totalAmount}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>کارمزد</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>جمع</b>
              <b>{totalAmount}</b>
            </div>
            <Button
              onClick={placeOrder}
              className="w-100 mt-1"
              variant="outlined"
            >
              ثبت سفارش
            </Button>
          </div>
        </div>
      </div>
    </OrderContainer>
  );
};

export default Order;
