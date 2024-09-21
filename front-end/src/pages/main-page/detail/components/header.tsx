import type { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between align-items-center py-3">
      <div className="d-flex gap-2">
        <IoShareSocialOutline size={20} className="pointer" />
        <FaRegHeart size={20} className="pointer" />
      </div>
      <div className="d-flex gap-1 pointer" onClick={() => navigate(-1)}>
        <p>بازگشت</p>
        <IoIosArrowBack size={20} />
      </div>
    </div>
  );
};

export default Header;
