import Logo from "@/assets/icons/logo.svg";
import PencilIcon from "@/assets/icons/pencil.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import ChallengeIcon from "@/assets/icons/challenge.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import { MenuProps, Menu } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <Link to="/">自分の記録</Link>,
    key: "record",
    icon: <img src={PencilIcon} />,
  },
  {
    label: <Link to="/my-record">チャレンジ</Link>,
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
  return (
    <div className="layout-header">
      <div className="container layout-container">
        <div className="layout-header__logo">
          <img src={Logo} />
        </div>
        <div className="layout-header__menu">
          <Menu mode="horizontal" items={items} />
          <img
            src={MenuIcon}
            alt="Menu Icon"
            className="layout-header__menu--icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
