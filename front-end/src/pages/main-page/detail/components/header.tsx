import type { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-3">
      <div className="d-flex gap-2">
        <IoShareSocialOutline size={20} />
        <FaRegHeart size={20} />
      </div>
      <div className="d-flex gap-2">
        <p>بازگشت</p>
        <IoIosArrowBack size={20} />
      </div>
    </div>
  );
};

export default Header;
