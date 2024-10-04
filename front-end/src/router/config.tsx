import { lazy } from "react";

import CartPage from "pages/cart/cart";
import OrdersPage from "pages/orders/orders";
import HomePage from "pages/main-page/home/home";
import FavoritesPage from "pages/favorites/favorites";
import ProfilePage from "pages/profile/profile";

// lazy pages
const NotFoundPage = lazy(() => import("pages/not-found/not-found"));
const ProductDetailPage = lazy(() => import("pages/main-page/detail/detail"));
const OrderPage = lazy(() => import("pages/order/order"));

// admin routes
const AdminPage = lazy(() => import("pages/admin/main-page/admin"));

export type routesProps = {
  path: string;
  component: React.FC;
  layout: {
    type: "default" | "core-admin";
    showFooter?: boolean;
    hideHeader?: boolean;
    hideBottomMenu?: boolean;
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
    path: "/orders",
    authType: "no-auth",
    layout: {
      type: "default",
    },
    component: OrdersPage,
  },
  {
    path: "/profile",
    authType: "no-auth",
    layout: {
      type: "default",
    },
    component: ProfilePage,
  },
  {
    path: "/favorites",
    authType: "no-auth",
    layout: {
      type: "default",
    },
    component: FavoritesPage,
  },
  {
    path: "/admin",
    authType: "no-auth",
    layout: {
      type: "default",
      hideHeader: true,
      hideBottomMenu: true,
    },
    component: AdminPage,
  },
];

export default routes;
