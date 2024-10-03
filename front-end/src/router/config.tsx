import { lazy } from "react";

const NotFoundPage = lazy(() => import("pages/not-found/not-found"));
const LoginPage = lazy(() => import("pages/login/login"));
const HomePage = lazy(() => import("pages/main-page/home/home"));
const ProductDetailPage = lazy(() => import("pages/main-page/detail/detail"));
const CartPage = lazy(() => import("pages/cart/cart"));
const OrderPage = lazy(() => import("pages/order/order"));

export type routesProps = {
  path: string;
  component: React.FC;
  layout: {
    type: "default" | "core-admin";
    showFooter?: boolean;
  };
  authType: "no-auth" | "auth";
};

const routes: routesProps[] = [
  {
    path: "*",
    component: NotFoundPage,
    layout: {
      type: "default",
    },
    authType: "no-auth",
  },
  {
    path: "/",
    authType: "no-auth",
    layout: {
      type: "default",
    },
    component: HomePage,
  },
  {
    path: "/:productId",
    authType: "no-auth",
    layout: {
      type: "default",
    },
    component: ProductDetailPage,
  },
  {
    path: "/cart",
    authType: "no-auth",
    layout: {
      type: "default",
    },
    component: CartPage,
  },
  {
    path: "/order",
    authType: "auth",
    layout: {
      type: "default",
    },
    component: OrderPage,
  },
  {
    path: "/login",
    authType: "no-auth",
    layout: {
      type: "default",
      showFooter: false,
    },
    component: LoginPage,
  },
];

export default routes;
