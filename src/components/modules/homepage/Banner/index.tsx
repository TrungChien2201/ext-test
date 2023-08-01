import BannerImage from "@/assets/images/d01.jpg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    // to remove the labels
    x: {
      grid: {
        color: '#777777'
      },
      border: {
        display: false
      },
      ticks: {
        color: '#fff',
        fontSize: 8
      }
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false
      },
      ticks: {
        display: false
      }
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1000, 800, 700, 500, 600, 550, 300, 200, 100, 250, 350, 90],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
    {
      label: "Dataset 2",
      data: [1000, 700, 800, 500, 650, 450, 350, 250, 100, 150, 450, 120],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
  ],
};

const Banner = () => {
  return (
    <div className="homepage-banner">
      <div className="homepage-banner__left">
        <img src={BannerImage} />
      </div>
      <div className="homepage-banner__chart">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
export default Banner;
