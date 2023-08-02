import { Col } from "antd";

interface IColumn {
  thumbnail: string;
  title: string;
  tag: string;
  dateTime: string;
  id: string;
}

const ColumnItem = ({ item }: { item: IColumn }) => {
  return (
    <Col xs={24} md={12} lg={6} className="column-item">
      <div>
        <div className="column-item__datetime">
          <img src={item.thumbnail} />
          <span>{item.dateTime}</span>
        </div>
        <div className="column-item__title">{item.title}</div>
        <div className="column-item__tag">{item.tag}</div>
      </div>
    </Col>
  );
};

export default ColumnItem;
