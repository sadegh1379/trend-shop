import type { FC } from "react";
import {
  IoIosBusiness,
  IoIosCloud,
  IoIosCog,
  IoIosContact,
  IoIosHeadset,
  IoIosHome,
  IoIosLogOut,
  IoIosPeople,
} from "react-icons/io";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { onLogout } from "state-manager/reducer/profile";
import { SidebarContainer } from "../css/sidebar.style";

interface SidebarProps {}

const links = [
  {
    path: "/core-admin",
    title: "داشبــورد",
    icon: <IoIosHome size={25} />,
  },
  {
    path: "/core-admin/centers",
    title: "مراکـــز",
    icon: <IoIosBusiness size={25} />,
  },
  {
    path: "/core-admin/users",
    title: "کاربران",
    icon: <IoIosPeople size={25} />,
  },
  {
    path: "/core-admin/roles",
    title: "نقش ها",
    icon: <IoIosContact size={25} />,
  },
  {
    path: "/core-admin/supports",
    title: "پشتیبان ها",
    icon: <IoIosHeadset size={25} />,
  },
  {
    path: "/core-admin/applications",
    title: "اپلیکیشن ها",
    icon: <IoIosCloud size={25} />,
  },
  {
    path: "/core-admin/settings",
    title: "تنظیمات",
    icon: <IoIosCog size={25} />,
  },
];

const Sidebar: FC<SidebarProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(onLogout());
    navigate("/login");
  };

  return (
    <SidebarContainer className="core_admin_sidebar">
      <div className="sidebar_title_container">
        <p className="sidebar_text">سامانه نوین جامع اطلاعات بیمارستان</p>
        <p className="sidebar_title">پنل مدیریتی</p>
      </div>
      {links.map((link, index) => (
        <NavLink
          key={`sidebar_config_${index}`}
          to={link.path}
          end={true}
          className="link_item"
        >
          <span className="link_item_icon">{link.icon}</span>
          <span className="link_item_title">{link.title}</span>
        </NavLink>
      ))}
      <div onClick={logoutHandler} className="link_item logout">
        <span className="link_item_icon">
          <IoIosLogOut size={25} />
        </span>
        <span className="link_item_title">خروج از سیستم</span>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
