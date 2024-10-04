import type { FC } from "react";
import { BottomMenuContainer } from "../css/bottom-menu.style";
import { NavLink } from "react-router-dom";
import {
  IoIosBusiness,
  IoIosContact,
  IoIosHome,
  IoIosPeople,
} from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";

interface BottomMenuProps {}

const BottomMenu: FC<BottomMenuProps> = () => {
  const navItems = [
    {
      path: "/cart",
      title: "سبد خرید",
      icon: <LuShoppingCart size={20} />,
    },

    {
      path: "/orders",
      title: "سفارشات",
      icon: <MdOutlineShoppingCartCheckout size={20} />,
    },
    {
      path: "/",
      title: "خانه",
      icon: <FaHome size={20} />,
    },
    {
      path: "/favorites",
      title: "علاقه مندی ها",
      icon: <MdFavoriteBorder size={20} />,
    },
    {
      path: "/profile",
      title: "پروفایل",
      icon: <IoIosContact size={20} />,
    },
  ];

  return (
    <BottomMenuContainer>
      {navItems.map((link, index) => (
        <NavLink
          key={`bottom_ite,_${index}`}
          to={link.path}
          end={true}
          className={`link_item ${link.path === "/" && "home_item"}`}
        >
          <span className="link_item_icon">{link.icon}</span>
          {link.path !== "/" && (
            <span className="link_item_title">{link.title}</span>
          )}
        </NavLink>
      ))}
    </BottomMenuContainer>
  );
};

export default BottomMenu;
