import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router";
import { ProductDetailContainer } from "./css/detail.style";
import { GETProductDetail } from "api/product";
import { IProduct } from "api/product/types";
import { Header } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { Button, RingLoader } from "components";
import { SlSizeFullscreen } from "react-icons/sl";

interface ProductDetailProps {}

const ProductDetail: FC<ProductDetailProps> = () => {
  const { productId } = useParams();
  const { assetsUrl } = useSelector((state: RootState) => state.product);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    GETProductDetail(productId!).then((res) => setProduct(res));
  }, [productId]);

  if (!product) return <RingLoader />;

  return (
    <ProductDetailContainer>
      <Header />
      <div className="image_container">
        <img className="product_img" src={assetsUrl + product?.image} alt="" />
        <SlSizeFullscreen className="full_screen" size={20} />
      </div>
      <div className="product_info">
        <div className="right_section">
          <p className="title">{product.name}</p>
        </div>
        <div className="left_section">
          <Button onClick={() => {}}>اضافه کردن به سبد خرید</Button>
        </div>
      </div>
      <p className="description">{product.description}</p>
      <p className="price">{product.price.toLocaleString()} تومان</p>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
