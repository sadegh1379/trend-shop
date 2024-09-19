import { GETCategoriesList } from "api/gategory";
import { ICategory } from "api/gategory/types";
import { GETProductList } from "api/product";
import { BannerImg } from "assets/images";
import { useEffect, useState, type FC } from "react";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { changeProducts } from "state-manager/reducer/product";
import { RootState } from "state-manager/store";
import { ProductCart } from "./components";
import { HomePageContainer } from "./css/home-page";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const { productsList } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    GETProductList().then((res) => {
      dispatch(changeProducts(res));
    });
    GETCategoriesList().then((res) => setCategories(res));
  }, []);

  return (
    <HomePageContainer>
      <Fade className="banner">
        <img className="banner_img" src={BannerImg} alt="" />
      </Fade>

      {/* categories */}
      <h3 className="text-right mb-2 mt-4">دسته بندی ها</h3>
      <div className="categories">
        <Fade className="my-1" triggerOnce duration={200} cascade>
          {categories?.map((cat) => (
            <span
              key={cat._id}
              onClick={() => setCategory(cat._id)}
              className={`category ${category === cat._id && "active"}`}
            >
              {cat.name}
            </span>
          ))}
        </Fade>
      </div>

      {/* products */}
      <h3 className="text-right mb-2 mt-4">محصولات</h3>
      <div className="product_container">
        <Fade triggerOnce duration={200} cascade>
          {productsList?.map((product) => (
            <ProductCart product={product} key={product._id} />
          ))}
        </Fade>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
