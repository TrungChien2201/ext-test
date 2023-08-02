import { Drawer, Menu } from "antd";
import CloseIcon from "@/assets/icons/close.svg";
import { Link } from "react-router-dom";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: <Link to="/my-record">自分の記録</Link>, key: "1" },
  { label: <Link to="/">体重グラフ</Link>, key: "2" },
  { label: <Link to="/">目標</Link>, key: "3" },
  { label: <Link to="/">選択中のコース</Link>, key: "4" },
  { label: <Link to="/column">コラム一覧</Link>, key: "5" },
  { label: <Link to="/">設定</Link>, key: "6" },
];

const DrawerCustom = (props: IProps) => {
  const { isOpen, onClose } = props;

  return (
    <div>
      <Drawer
        className="layout-drawer"
        title=""
        placement={"right"}
        closable={true}
        closeIcon={<img src={CloseIcon} />}
        onClose={onClose}
        open={isOpen}
        key={"right"}
        destroyOnClose
      >
        <Menu onClick={onClose} mode="vertical" items={menuItems} />
      </Drawer>
    </div>
  );
};

export default DrawerCustom;
