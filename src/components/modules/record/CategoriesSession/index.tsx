import { Col, Row } from "antd";
import ThumbNail1 from "@/assets/images/MyRecommend-1.jpg";
import ThumbNail2 from "@/assets/images/MyRecommend-2.jpg";
import ThumbNail3 from "@/assets/images/MyRecommend-3.jpg";

const listSession = [
  {
    title: "Body record",
    description: "自分のカラダの記録",
    thumbnail: ThumbNail1,
  },
  {
    title: "My exercise",
    description: "自分の運動の記録",
    thumbnail: ThumbNail2,
  },
  { title: "My diary", description: "自分の日記", thumbnail: ThumbNail3 },
];

const CategoriesSession = () => {
  return (
    <Row className="record-session">
      {listSession.map((session, index) => (
        <Col key={index} xs={24} md={8} xl={8} xxl={8}>
          <div className="record-session-item__border">
            <div className="record-session-item__box">
              <img src={session.thumbnail} />
              <div className="record-session-item__content">
                <h5 className="record-session-item__content--title">{session.title}</h5>
                <span className="record-session-item__content--description">
                  {session.description}
                </span>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CategoriesSession;
