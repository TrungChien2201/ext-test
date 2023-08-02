import { useState } from "react";

import Column1 from "@/assets/images/column-1.jpg";
import Column2 from "@/assets/images/column-2.jpg";
import Column3 from "@/assets/images/column-3.jpg";
import Column4 from "@/assets/images/column-4.jpg";
import Column5 from "@/assets/images/column-5.jpg";
import Column6 from "@/assets/images/column-6.jpg";
import Column7 from "@/assets/images/column-7.jpg";
import Column8 from "@/assets/images/column-8.jpg";
import { guidGenerator } from "@/utils/constants/function";
import { Row } from "antd";
import ColumnItem from "../ColumnItem";
import InfiniteScrollLoading from "@/components/base/InfiniteScrollLoading";
import ButtonCustom from "@/components/base/Button";

const items = [
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column1,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column2,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column3,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column4,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column5,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column6,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column7,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
  {
    id: guidGenerator(),
    dateTime: "2021.05.17 23:25",
    thumbnail: Column8,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tag: "#魚料理  #和食  #DHA",
  },
];

const ListColumn = () => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [listData, setListData] = useState(items);

  const fetchData = () => {
    if (isLoadMore && listData.length <= 32) {
      setListData([...listData, ...items]);
    }
  };

  const handleLoadMore = () => {
    setIsLoadMore(true);
  };

  const renderListColumn = () => {
    return (
      <Row className="column-list">
        {listData.map((item, index) => (
          <ColumnItem item={item} key={index} />
        ))}
      </Row>
    );
  };

  return (
    <div>
      {isLoadMore ? (
        <InfiniteScrollLoading length={listData.length} fetchData={fetchData}>
          {renderListColumn()}
        </InfiniteScrollLoading>
      ) : (
        renderListColumn()
      )}

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
export default ListColumn;
