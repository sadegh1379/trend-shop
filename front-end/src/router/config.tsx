import { lazy } from "react";

const NotFoundPage = lazy(() => import("pages/not-found/not-found"));
const HomePage = lazy(() => import("pages/main-page/home/home"));
const ProductDetailPage = lazy(() => import("pages/main-page/detail/detail"));
const CartPage = lazy(() => import("pages/cart/cart"));
const OrderPage = lazy(() => import("pages/order/order"));
const OrdersPage = lazy(() => import("pages/orders/orders"));

// admin routes
const AdminPage = lazy(() => import("pages/admin/main-page/admin"));

export type routesProps = {
  path: string;
  component: React.FC;
  layout: {
    type: "default" | "core-admin";
    showFooter?: boolean;
    hideHeader?: boolean;
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
    authType: "auth",
    layout: {
      type: "default",
    },
    component: OrdersPage,
  },
  {
    path: "/admin",
    authType: "no-auth",
    layout: {
      type: "default",
      hideHeader: true,
    },
    component: AdminPage,
  },
];

export default routes;
