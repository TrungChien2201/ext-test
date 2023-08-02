import { Col } from "antd";
import { IExercise } from "../MyExercise";

const DiaryItem = ({ item }: { item: IExercise }) => {
  return (
    <Col xs={24} md={12} lg={6} className="mydiary-item">
      <div>
        <div className="mydiary-item__datetime">{item.dateTime}</div>
        <div className="mydiary-item__title">{item.title}</div>
        <div className="mydiary-item__description">{item.description}</div>
      </div>
    </Col>
  );
};

export default DiaryItem;
