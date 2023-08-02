import Logo from "@/assets/icons/logo.svg";
import PencilIcon from "@/assets/icons/pencil.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import ChallengeIcon from "@/assets/icons/challenge.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import { MenuProps, Menu } from "antd";
import { Link } from "react-router-dom";
import DrawerCustom from "../Drawer";
import { useState } from "react";

const items: MenuProps["items"] = [
  {
    label: <Link to="/my-record">自分の記録</Link>,
    key: "record",
    icon: <img src={PencilIcon} />,
  },
  {
    label: <Link to="/">チャレンジ</Link>,
    key: "challenge",
    icon: <img src={ChallengeIcon} />,
  },
  {
    label: <Link to="/">お知らせ</Link>,
    key: "warning",
    icon: <img src={WarningIcon} />,
  },
];

const Header = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setIsShowDrawer(!isShowDrawer);
  };

  return (
    <div className="layout-header">
      <div className="container layout-container">
        <div className="layout-header__logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="layout-header__menu">
          <Menu mode="horizontal" items={items} />
          <img
            src={MenuIcon}
            onClick={handleOpenDrawer}
            alt="Menu Icon"
            className="layout-header__menu--icon"
          />
        </div>
      </div>

      <DrawerCustom isOpen={isShowDrawer} onClose={handleOpenDrawer} />
    </div>
  );
};

export default Header;
