import { ReactElement, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollUpIcon from "./components/ScrollUpIcon";

interface IProps {
  children?: ReactElement;
}

const MainLayout = (props: IProps) => {
  const { children } = props;

  const [isShowIcon, setIsShowIcon] = useState(false);

  const onScroll = (event: {currentTarget: {scrollY: number}}) => {
    if (event?.currentTarget.scrollY > 450) {
      setIsShowIcon(true);
    } else if (event.currentTarget.scrollY < 450) {
      setIsShowIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll as () => void);
    return () =>
    window.removeEventListener("scroll", onScroll as () => void);
  }, []);

  return (
    <div>
      <Header />
      <div className="layout-content">{children}</div>
      {isShowIcon && <ScrollUpIcon />}
      <Footer />
    </div>
  );
};

export default MainLayout;
