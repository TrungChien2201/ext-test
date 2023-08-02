import ListColumn from "@/components/modules/column/ListColumn";
import RecommendedSession from "@/components/modules/column/RecommendedSession";

const Column = () => {
  return (
    <div className="column">
      <div className="container">
        <RecommendedSession />
        <ListColumn />
      </div>
    </div>
  );
};

export default Column;
