import { useEffect, useState, type FC } from "react";
import { CartContainer } from "./css/cart.style";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { useDispatch } from "react-redux";
import { GETProductDetail, GETProductList } from "api/product";
import { DELETEUserCartItem, GETUserCart } from "api/user";
import { changeProducts } from "state-manager/reducer/product";
import {
  changeShowLoginModal,
  changeUserCart,
  removeFromCart,
} from "state-manager/reducer/profile";
import { Button, DotLoader, RingLoader } from "components";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isRemoving, setIsRemoving] = useState("");
  const { productsList, assetsUrl } = useSelector(
    (state: RootState) => state.product
  );
  const { cartItems, token } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    GETProductList({}).then((res) => dispatch(changeProducts(res)));
    if (token) {
      GETUserCart().then((res) => dispatch(changeUserCart(res)));
    }
    setIsLoading(false);
  }, []);

  const handleRemoveFromCart = (id: string) => {
    setIsRemoving(id);
    DELETEUserCartItem(id)
      .then(() => {
        dispatch(removeFromCart(id));
      })
      .finally(() => setIsRemoving(""));
  };

  if (isLoading) return <RingLoader />;

  return (
    <CartContainer>
      <div
        className="d-flex justify-content-end my-3 gap-1 pointer"
        onClick={() => navigate(-1)}
      >
        <p>بازگشت</p>
        <IoIosArrowBack size={20} />
      </div>
      {token ? (
        <div className="cart">
          <div className="cart_items">
            <div className="cart_items_title">
              <p>ایتم</p>
              <p>نام</p>
              <p>قیمت</p>
              <p>تعداد</p>
              <p>جمع کل</p>
              <p>حذف</p>
            </div>
            <hr />
            {productsList?.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart_items_title cart_items_item">
                      <img src={`${assetsUrl}${item.image}`} alt="" />
                      <Link to={`/${item._id}`}>{item.name}</Link>
                      <p>{item.price.toLocaleString()} تومان</p>
                      <p>{cartItems[item._id]}</p>
                      <p>
                        {(item.price * cartItems[item._id]).toLocaleString()}{" "}
                        تومان
                      </p>
                      <p
                        onClick={() => handleRemoveFromCart(item._id)}
                        className="pointer"
                      >
                        {isRemoving === item._id ? (
                          <DotLoader />
                        ) : (
                          <FaRegTrashAlt color="red" size={15} />
                        )}
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart_bottom">
            <div className="cart_total">
              <h2>جمع سبد خرید</h2>
              <div>
                <div className="cart_total_details">
                  <p>جمع فرعی</p>
                  <p>{}</p>
                </div>
                <hr />
                <div className="cart_total_details">
                  <p>کارمزد</p>
                  <p>{2}</p>
                </div>
                <hr />
                <div className="cart_total_details">
                  <b>جمع</b>
                  <b>{}</b>
                </div>
              </div>
              <button onClick={() => navigate("/order")}>ادامه خرید</button>
            </div>
            {/* <div className="cart_promocode">
              <div>
                <p>اگر کد تخفیف دارید؟وارد کنید</p>
                <div className="promocode_input">
                  <input type="text" placeholder="کد تخفیف" />
                  <button>اعمال</button>
                </div>
              </div>
            </div> */}
          </div>
          <Button className="w-100" variant="outlined">
            پرداخت
          </Button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-1 mt-5 justify-content-center align-items-center">
          <p>لطفا وارد شوید</p>
          <Button
            onClick={() => dispatch(changeShowLoginModal(true))}
            variant="outlined"
            className="mt-2"
          >
            ورود یا ثبت نام
          </Button>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
