const listRecommend = [
  { title: "RECOMMENDED COLUMN", description: "オススメ" },
  { title: "RECOMMENDED DIET", description: "ダイエット" },
  { title: "RECOMMENDED BEAUTY", description: "美容" },
  { title: "RECOMMENDED HEALTH", description: "健康" },
];
const RecommendedSession = () => {
  return (
    <div className="column-recommend">
      <div className="column-recommend__list">
        {listRecommend.map((item, index) => (
          <div className="column-recommend__item" key={index}>
            <div className="column-recommend__item--session">
              <div className="column-recommend__item--title">{item.title}</div>
              <div className="column-recommend__item--description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSession;
