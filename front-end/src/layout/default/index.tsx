import { FC } from "react";
import { AppHeader, BottomMenu, Footer } from "./components";
import { LayoutContainer } from "./css/layout";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { LoginModal } from "components";

const DefaultLayout: FC<{
  children: React.ReactNode;
  showFooter?: boolean;
  hideHeader?: boolean;
  hideBottomMenu?: boolean;
}> = ({ children, showFooter, hideHeader, hideBottomMenu }) => {
  const { showLoginModal } = useSelector((state: RootState) => state.profile);

  return (
    <LayoutContainer>
      {showLoginModal && <LoginModal />}
      <div className="content">
        {!hideHeader && <AppHeader />}
        {children}
      </div>
      {!hideBottomMenu && <BottomMenu />}
      {/* {showFooter && <Footer />} */}
    </LayoutContainer>
  );
};
export default DefaultLayout;
