import { GETUserOrders } from "api/order";
import { Button, RingLoader } from "components";
import moment from "moment-jalaali";
import { useEffect, useState, type FC } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { CartContainer } from "./orders.style";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { useDispatch } from "react-redux";
import { changeShowLoginModal } from "state-manager/reducer/profile";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<IOrder[] | null>(null);
  const { token } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      GETUserOrders().then((res) => {
        setOrders(res);
      });
      setIsLoading(false);
    }
  }, [token]);

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
              <p>جمع کل ( تومان )</p>
              <p>نام</p>
              <p>تاریخ</p>
              <p>وضعیت</p>
            </div>
            <hr />
            {orders?.map((order, index) => {
              return (
                <div key={index}>
                  <div className="cart_items_title cart_items_item">
                    <p>{Number(order.amount).toLocaleString()}</p>
                    <p>{order.firstName || "-"}</p>
                    <p>{moment(order.date).format("jYYYY/jM/jD")}</p>
                    <p>
                      {order.status === "processing"
                        ? "در حال پردازش"
                        : "تحویل داده شده"}
                    </p>
                    <p>-</p>
                    {/* <Link to={`/order?orderId=${order._id}`}>جزییات</Link> */}
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
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
