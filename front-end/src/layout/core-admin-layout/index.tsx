import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./component";
import { ContentSectionContainer } from "./css/content-section.style";
import { CoreAdminLayoutContainer } from "./css/core-admin-layout.style";

const CoreAdminLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <CoreAdminLayoutContainer>
    <Sidebar />
    <ContentSectionContainer>
      {children}
      <Outlet />
    </ContentSectionContainer>
  </CoreAdminLayoutContainer>
);
export default CoreAdminLayout;
