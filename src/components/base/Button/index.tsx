import { Button } from "antd";
import './style.scss';

interface IProps {
  children: string;
  color?: string;
  onClick: () => void;
}

const ButtonCustom = (props: IProps) => {
  const { children, color = 'yellow', onClick } = props;
  return <Button onClick={onClick} className={`btn-${color}`}>{children}</Button>;
};

export default ButtonCustom;
