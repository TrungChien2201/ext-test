import { guidGenerator } from "@/utils/constants/function";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Category1 from "@/assets/images/d01.jpg";
import Category2 from "@/assets/images/d02.jpg";
import Category3 from "@/assets/images/l01.jpg";
import Category4 from "@/assets/images/l02.jpg";
import Category5 from "@/assets/images/l03.jpg";
import Category6 from "@/assets/images/m01.jpg";
import Category7 from "@/assets/images/m02.jpg";
import Category8 from "@/assets/images/m03.jpg";
import MealIcon from "@/assets/icons/meal.svg";
import FilterBackgroundIcon from "@/assets/icons/filter-icon.png";
import SnackIcon from "@/assets/icons/snack.svg";
import { ICategory } from "@/utils/interface/home";
import CategoryItem from "../CategoryItem";
import { Row } from "antd";
import ButtonCustom from "@/components/base/Button";

const items = [
  { id: guidGenerator(), text: "05.21.Morning", thumbnail: Category1 },
  { id: guidGenerator(), text: "05.21.Lunch", thumbnail: Category2 },
  { id: guidGenerator(), text: "05.21.Dinner", thumbnail: Category3 },
  { id: guidGenerator(), text: "05.21.Snack", thumbnail: Category4 },
  { id: guidGenerator(), text: "05.20.Morning", thumbnail: Category5 },
  { id: guidGenerator(), text: "05.20.Lunch", thumbnail: Category6 },
  { id: guidGenerator(), text: "05.21.Dinner", thumbnail: Category7 },
  { id: guidGenerator(), text: "05.21.Snack", thumbnail: Category8 },
];

const filterItems = [
  { icon: MealIcon, text: "Morning" },
  { icon: MealIcon, text: "Lunch" },
  { icon: MealIcon, text: "Dinner" },
  { icon: SnackIcon, text: "Snack" },
];

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>(items);
  const [isHasMore, setIsHasMore] = useState(false);

  const fetchData = () => {
    if (isHasMore) {
      setCategories([...categories, ...items]);
    }
  };

  const handleLoadMore = () => {
    setIsHasMore(true);
  };
  console.log(isHasMore);
  return (
    <div className="container">
      <div className="homepage-categories__filter">
        {filterItems.map((item, index) => (
          <div className="homepage-categories__filter--item" key={index}>
            <img
              className="homepage-categories__filter--item-background"
              src={FilterBackgroundIcon}
            />
            <div className="homepage-categories__filter--item-box">
              <img src={item.icon} />
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
      {!isHasMore ? (
        <Row className="homepage-categories">
          {categories.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </Row>
      ) : (
        <InfiniteScroll
          dataLength={categories.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={null}
          // below props only if you need pull down functionality
          refreshFunction={() => {}}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
        >
          <Row className="homepage-categories">
            {categories.map((item) => (
              <CategoryItem key={item.id} item={item} />
            ))}
          </Row>
        </InfiniteScroll>
      )}
      {!isHasMore && (
        <div className="homepage-categories__loadmore">
          <ButtonCustom onClick={handleLoadMore}>記録をもっと見る</ButtonCustom>
        </div>
      )}
    </div>
  );
};
export default Categories;
