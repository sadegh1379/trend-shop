import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router";
import {
  ProductDetailContainer,
  FullScreenImageContainer,
} from "./css/detail.style";
import { GETProductDetail } from "api/product";
import { IProduct } from "api/product/types";
import { Header } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { Button, RingLoader } from "components";
import { SlSizeFullscreen, SlSizeActual } from "react-icons/sl"; // Import resize icon
import { useDispatch } from "react-redux";
import {
  addToCart,
  changeShowLoginModal,
  changeUserCart,
  removeFromCart,
} from "state-manager/reducer/profile";
import { toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { DELETEUserCartItem, GETUserCart, POSTUserCart } from "api/user";

interface ProductDetailProps {}

const ProductDetail: FC<ProductDetailProps> = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { assetsUrl } = useSelector((state: RootState) => state.product);
  const { token, cartItems } = useSelector((state: RootState) => state.profile);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false); // Track full-screen state

  useEffect(() => {
    GETProductDetail(productId!).then((res) => setProduct(res));
    if (token) {
      GETUserCart().then((res) => dispatch(changeUserCart(res)));
    }
  }, [productId, token]);

  const handleAddToCart = () => {
    if (token) {
      POSTUserCart(productId!).then((res) => {
        dispatch(addToCart(productId!));
      });
    } else {
      toast.warning("لطفا اول وارد شوید.");
      dispatch(changeShowLoginModal(true));
    }
  };

  const handleRemoveFromCart = () => {
    DELETEUserCartItem(productId!).then(() => {
      dispatch(removeFromCart(productId!));
    });
  };

  const handleFullScreenImage = () => {
    setIsFullScreen(!isFullScreen); // Toggle full-screen state
  };

  if (!product) return <RingLoader />;

  return (
    <ProductDetailContainer>
      <Header />
      <div className="image_container">
        <img
          className="product_img"
          src={assetsUrl + product?.image}
          alt=""
          onClick={handleFullScreenImage} // Open image in full screen
        />
        <SlSizeFullscreen
          className="full_screen"
          size={20}
          onClick={handleFullScreenImage} // Open full-screen mode on icon click
        />
      </div>

      {/* Full-screen image overlay */}
      {isFullScreen && (
        <FullScreenImageContainer>
          <img
            className="full_screen_img"
            src={assetsUrl + product?.image}
            alt=""
            onClick={handleFullScreenImage} // Exit full-screen on image click
          />
          <SlSizeActual
            className="resize_icon"
            size={30}
            onClick={handleFullScreenImage} // Exit full-screen on icon click
          />
        </FullScreenImageContainer>
      )}

      <div className="product_info">
        <div className="right_section">
          <p className="title">{product.name}</p>
        </div>
        {cartItems[productId!] ? (
          <div className="detail_tools">
            <IoIosAddCircle
              onClick={handleAddToCart}
              size={30}
              className="detail_tools_add"
            />
            <p>{cartItems[productId!]}</p>
            <IoRemoveCircleSharp
              onClick={handleRemoveFromCart}
              size={30}
              className="detail_tools_remove"
            />
          </div>
        ) : (
          <div className="left_section">
            <Button onClick={handleAddToCart}>اضافه کردن به سبد خرید</Button>
          </div>
        )}
      </div>
      <p className="description">{product.description}</p>
      <p className="price">{product.price.toLocaleString()} تومان</p>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
