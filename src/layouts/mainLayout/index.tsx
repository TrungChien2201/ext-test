import { ReactElement } from "react";
import Header from "./components/Header";

interface IProps {
  children?: ReactElement;
}


const MainLayout = (props: IProps) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>

    </div>
  );
};

export default MainLayout;
