import BannerImage from "@/assets/images/d01.jpg";
import ChartLine from "@/components/base/ChartLine";

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

const data = {
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
  const percent = 75;
  const currentValue = 5;
  const total = 21;
  return (
    <div className="homepage-banner">
      <div className="homepage-banner__left">
        <img src={BannerImage} />
        <div className="homepage-banner__left--info">
          <div className="homepage-banner__left--loader">
            <div className="homepage-banner__left--info-box">
              <span>
                {currentValue}/{total}
              </span>{" "}
              <span>{percent}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-banner__chart">
        <ChartLine data={data} />
      </div>
    </div>
  );
};
export default Banner;
