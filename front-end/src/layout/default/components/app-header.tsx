import type { FC } from "react";
import { AppHeaderContainer } from "../css/app-header";
import { AppLogoImg } from "assets/images";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";

const AppHeader: FC = () => {
  return (
    <AppHeaderContainer>
      <CgProfile size={30} className="header_icon" />
      <img className="app_logo" src={AppLogoImg} alt="logo" />
      <LuShoppingCart className="header_icon" size={30} />
    </AppHeaderContainer>
  );
};

export default AppHeader;
