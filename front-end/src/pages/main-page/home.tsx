import { useEffect, useState, type FC } from "react";
import { HomePageContainer } from "./css/home-page";
import { GETProductList } from "api/product";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { useDispatch } from "react-redux";
import { changeProducts } from "state-manager/reducer/product";
import { ProductCart } from "./components";
import { BannerImg } from "assets/images";

interface HomePageProps {}

const categories = [
  {
    _id: "10",
    name: "کفش",
  },
  {
    _id: "11",
    name: "لباس",
  },
  {
    _id: "12",
    name: "کیف",
  },
  {
    _id: "13",
    name: "لوازم تحریر",
  },
  {
    _id: "14",
    name: "تلویزیون",
  },
  {
    _id: "15",
    name: "گوشی گوشی گوشی",
  },
];

const HomePage: FC<HomePageProps> = () => {
  const { productsList } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  useEffect(() => {
    GETProductList().then((res) => {
      dispatch(changeProducts(res));
    });
  }, []);

  console.log(category);

  return (
    <HomePageContainer>
      <div className="banner">
        <img className="banner_img" src={BannerImg} alt="" />
      </div>
      <h3 className="text-right mb-2 mt-4">دسته بندی ها</h3>

      <div className="categories">
        {categories?.map((cat) => (
          <span
            key={cat._id}
            onClick={() => setCategory(cat._id)}
            className={`category ${category === cat._id && "active"}`}
          >
            {cat.name}
          </span>
        ))}
      </div>
      <h3 className="text-right mb-2 mt-4">محصولات</h3>
      <div className="product_container">
        {productsList?.map((product) => (
          <ProductCart product={product} key={product._id} />
        ))}
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
