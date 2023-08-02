import { ReactElement } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface IProps {
  children: ReactElement;
  length: number;
  fetchData: () => void;
}
const InfiniteScrollLoading = (props: IProps) => {
  const { length, children, fetchData } = props;
  return (
    <InfiniteScroll
      dataLength={length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={null}
      // below props only if you need pull down functionality
      refreshFunction={() => {}}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScrollLoading;
