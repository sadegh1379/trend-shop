import { FC } from "react";
import { AppHeader, Footer } from "./components";
import { LayoutContainer } from "./css/layout";
import { useSelector } from "react-redux";
import { RootState } from "state-manager/store";
import { LoginModal } from "components";

const DefaultLayout: FC<{
  children: React.ReactNode;
  showFooter?: boolean;
}> = ({ children, showFooter }) => {
  const { showLoginModal } = useSelector((state: RootState) => state.profile);

  return (
    <LayoutContainer>
      {showLoginModal && <LoginModal />}
      <div className="content">
        <AppHeader />
        {children}
      </div>
      {showFooter && <Footer />}
    </LayoutContainer>
  );
};
export default DefaultLayout;
