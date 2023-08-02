import ButtonCustom from "@/components/base/Button";
import InfiniteScrollLoading from "@/components/base/InfiniteScrollLoading";
import { generateArray } from "@/utils/constants/function";
import { useState } from "react";
import DiaryItem from "../DiaryItem";
import { Row } from "antd";

const MyDiary = () => {
  const data = generateArray(8, {
    title: "私の日記の記録が一部表示されます。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    dateTime: "2021.05.21 23:25",
  });

  const [isLoadMore, setIsLoadMore] = useState(false);
  const [listData, setListData] = useState(data);

  const fetchData = () => {
    if (isLoadMore && listData.length <= 32) {
      setListData([...listData, ...data]);
    }
  };

  const handleLoadMore = () => {
    setIsLoadMore(true);
  };

  const renderListDiary = () => {
    return (
      <Row className="mydiary-list">
        {listData.map((item, index) => (
          <DiaryItem item={item} key={index} />
        ))}
      </Row>
    );
  };
  return (
    <div className="mydiary">
      <h5 className="mydiary-title">My diary</h5>
      <div className="mydiary-content">
        {isLoadMore ? (
          <InfiniteScrollLoading length={listData.length} fetchData={fetchData}>
            {renderListDiary()}
          </InfiniteScrollLoading>
        ) : (
          renderListDiary()
        )}
      </div>

      {!isLoadMore && (
        <div className="homepage-categories__loadmore">
          <ButtonCustom onClick={handleLoadMore}>
            自分の日記をもっと見る
          </ButtonCustom>
        </div>
      )}
    </div>
  );
};
export default MyDiary;
