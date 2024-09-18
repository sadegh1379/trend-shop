import { FC } from "react";
import { AppHeader, Footer } from "./components";
import { LayoutContainer } from "./css/layout";

const DefaultLayout: FC<{
  children: React.ReactNode;
  showFooter?: boolean;
}> = ({ children, showFooter }) => (
  <LayoutContainer>
    <div className="content">
      <AppHeader />
      {children}
    </div>
    {showFooter && <Footer />}
  </LayoutContainer>
);
export default DefaultLayout;
