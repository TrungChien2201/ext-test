import { generateArray } from "@/utils/constants/function";

export interface IExercise {
  title: string;
  description?: string;
  dateTime?: string;
  duration?: number;
  cal?: number;
}

const MyExercise = () => {
  const listExercise = generateArray(40, {
    title: "家事全般（立位・軽い）",
    cal: 26,
    duration: 10,
  });
  return (
    <div className="myexercise body-record">
      <div className="body-record__header">
        <div className="body-record__header--title">My exercise</div>
        <span className="body-record__header--time">2021.05.21</span>
      </div>
      <div className="myexercise-list">
        {listExercise.map((item: IExercise, index: number) => (
          <div className="myexercise-item" key={index}>
            <div>
              <p className="myexercise-item__title">{item.title}</p>
              <span className="myexercise-item__text--yellow">
                {item.cal}kcal
              </span>
            </div>
            <span className="myexercise-item__text--yellow">
              {item.duration} min
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExercise;
