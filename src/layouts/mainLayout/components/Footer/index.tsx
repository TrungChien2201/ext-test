import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <Link to="/">会員登録</Link>,
    key: "1",
  },
  {
    label: <Link to="/">運営会社</Link>,
    key: "2",
  },
  {
    label: <Link to="/">利用規約</Link>,
    key: "3",
  },
  {
    label: <Link to="/">個人情報の取扱について</Link>,
    key: "4",
  },
  {
    label: <Link to="/">特定商取引法に基づく表記</Link>,
    key: "5",
  },
  {
    label: <Link to="/">お問い合わせ</Link>,
    key: "6",
  },
];

const Footer = () => {
  return (
    <div className="layout-footer">
      <Menu mode="horizontal" items={items} />
    </div>
  );
};

export default Footer;
