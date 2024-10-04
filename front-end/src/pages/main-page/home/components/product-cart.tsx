import type { FC } from "react";
import { ProductCartContainer } from "../css/product-cart";
import { IProduct } from "api/product/types";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa6";
interface ProductCartProps {
  product: IProduct;
}

const ProductCart: FC<ProductCartProps> = ({ product }) => {
  const { assetsUrl } = useSelector((state: RootState) => state.product);
  return (
    <Link to={`/${product._id}`}>
      <ProductCartContainer>
        {/* <FaRegHeart size={20} className="product_favorite_icon" /> */}
        <img className="product_img" src={assetsUrl + product.image} alt="" />
        <p className="product_title">{product.name}</p>
        <p className="product_description">{product.description}</p>
        <p className="product_price">{product.price.toLocaleString()} تومان</p>
      </ProductCartContainer>
    </Link>
  );
};

export default ProductCart;
