import { useEffect, type FC } from "react";
import { HomePageContainer } from "./css/home-page";
import { GETProductList } from "api/product";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  useEffect(() => {
    GETProductList().then((res) => {
      console.log(res);
    });
  });
  return <HomePageContainer>home page</HomePageContainer>;
};

export default HomePage;
