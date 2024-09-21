import type { FC } from "react";
import { AppHeaderContainer } from "../css/app-header";
import { AppLogoImg } from "assets/images";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Dropdown } from "react-bootstrap";
import { changeShowLoginModal, onLogout } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";

const AppHeader: FC = () => {
  const dispatch = useDispatch();
  const { token, userInfo, cartItems } = useSelector(
    (state: RootState) => state.profile
  );

  const handleShowLoginModal = () => {
    dispatch(changeShowLoginModal(true));
  };

  const handleLogout = () => {
    dispatch(onLogout());
  };

  return (
    <AppHeaderContainer>
      {token ? (
        <Dropdown>
          <Dropdown.Toggle as="div" className="header_icon pointer">
            <CgProfile size={30} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.ItemText>{userInfo?.name}</Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.Item>سفارشات</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>خروج</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <CgProfile
          onClick={handleShowLoginModal}
          size={30}
          className="header_icon pointer"
        />
      )}
      <img className="app_logo" src={AppLogoImg} alt="logo" />
      <span className="cart_badge_container">
        <LuShoppingCart className="header_icon pointer" size={30} />
        {Object.keys(cartItems).length > 0 && (
          <span className="badge">{Object.keys(cartItems).length}</span>
        )}
      </span>
    </AppHeaderContainer>
  );
};

export default AppHeader;
