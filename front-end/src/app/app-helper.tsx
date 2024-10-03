import { PageLoader } from "components";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { routesProps } from "router/config";
import { changeToken } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import { CoreAdminLayout, DefaultLayout } from "../layout";

interface RequireAuthProps {
  children: ReactNode;
}

interface RequireNoAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { token: userToken } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      dispatch(changeToken(userToken));
    } else if (!userToken) {
      toast.warn("شما خارج شدید.");
      navigate(`/`, { replace: true });
    }
  }, [userToken, location.pathname]);

  if (!userToken) return <PageLoader />;

  return <>{children}</>;
};

const RequireNoAuth: FC<RequireNoAuthProps> = ({ children }) => {
  // complete later...

  return <>{children}</>;
};

const RoutesLayoutHandler = ({
  type,
  children,
  showFooter = true,
}: {
  type: routesProps["layout"]["type"];
  hideSettingMenu?: boolean;
  children: React.ReactNode;
  showFooter?: boolean;
}) => {
  switch (type) {
    case "default":
      return <DefaultLayout showFooter={showFooter}>{children}</DefaultLayout>;
    case "core-admin":
      return <CoreAdminLayout>{children}</CoreAdminLayout>;
    default:
      return null;
  }
};

export { RequireAuth, RequireNoAuth, RoutesLayoutHandler };
