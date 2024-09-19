import type { FC } from "react";
import { AppHeaderContainer } from "../css/app-header";
import { AppLogoImg } from "assets/images";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { changeShowLoginModal } from "state-manager/reducer/profile";

const AppHeader: FC = () => {
  const dispatch = useDispatch();

  const handleShowLoginModal = () => {
    dispatch(changeShowLoginModal(true));
  };
  return (
    <AppHeaderContainer>
      <CgProfile
        onClick={handleShowLoginModal}
        size={30}
        className="header_icon pointer"
      />
      <img className="app_logo" src={AppLogoImg} alt="logo" />
      <LuShoppingCart className="header_icon pointer" size={30} />
    </AppHeaderContainer>
  );
};

export default AppHeader;
