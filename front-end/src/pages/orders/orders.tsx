import { GETUserOrders } from "api/order";
import { RingLoader } from "components";
import moment from "moment-jalaali";
import { useEffect, useState, type FC } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { CartContainer } from "./orders.style";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<IOrder[] | null>(null);

  useEffect(() => {
    GETUserOrders().then((res) => {
      setOrders(res);
    });
    setIsLoading(false);
  }, []);

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
    </CartContainer>
  );
};

export default Cart;
