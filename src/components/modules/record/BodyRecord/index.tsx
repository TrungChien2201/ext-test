import ChartLine from "@/components/base/ChartLine";
import { dateMonthLabels } from "@/utils/constants";
import { randomIndex } from "@/utils/constants/function";
import { useState } from "react";

const setOne = [1000, 800, 700, 500, 600, 550, 300, 200, 100, 250, 350, 90];

const setTwo = [1000, 700, 800, 500, 650, 450, 350, 250, 100, 150, 450, 120];

const filterOptions = [
  { title: "日", type: "days" },
  { title: "週", type: "weeks" },
  { title: "月", type: "months" },
  { title: "年", type: "years" },
];

const BodyRecord = () => {
  const [selectedType, setSelectedType] = useState("years");

  const dataSets = (dateMonthLabels as never)[selectedType] as string[];

  const data = {
    labels: (dateMonthLabels as never)[selectedType],
    datasets: [
      {
        label: "Dataset 1",
        data: dataSets.map(() => setOne[randomIndex(dataSets.length)]),
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
      {
        label: "Dataset 2",
        data: dataSets.map(() => setTwo[randomIndex(dataSets.length)]),
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
    ],
  };

  return (
    <div className="body-record">
      <div className="body-record__header">
        <div className="body-record__header--title">Body record</div>
        <span className="body-record__header--time">2021.05.21</span>
      </div>
      <div className="body-record__chart">
        <ChartLine data={data} />
      </div>
      <div className="body-record__filter">
        {filterOptions.map((item) => (
          <span
            onClick={() => setSelectedType(item.type)}
            className={selectedType === item.type ? "active" : ""}
            key={item.type}
          > 
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};
export default BodyRecord;
