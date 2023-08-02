import BodyRecord from "@/components/modules/record/BodyRecord";
import CategoriesSession from "@/components/modules/record/CategoriesSession";
import MyDiary from "@/components/modules/record/MyDiary";
import MyExercise from "@/components/modules/record/MyExercise";

const MyRecord = () => {
  return (
    <div className="record">
      <div className="container">
        <CategoriesSession />
        <BodyRecord />
        <MyExercise />
        <MyDiary />
      </div>
    </div>
  );
};

export default MyRecord;
