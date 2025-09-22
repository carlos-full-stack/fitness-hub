import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const metricsConfig = {
  bmi: {
    maxValue: 40,
    circleRatio: 0.75,
    circleRotation: 1 / 2 + 1 / 8,
    colorTheme: "bmi",
    valueProperty: "imc",
    labelProperty: "category",
  },
  progress: {
    circleRatio: 1,
    circleRotation: 0,
    colorTheme: "progress",
    valueProperty: "attendance_last_7_days",
    labelProperty: "category",
  },
  calories: {
    recommendedValue: 17500,
    circleRatio: 0.75,
    circleRotation: 1 / 2 + 1 / 8,
    unit: "cal",
    colorTheme: "calories",
    valueProperty: "average_calories",
    labelProperty: "total_calories",
  },
  kms: {
    recommendedValue: 20,
    circleRatio: 0.75,
    circleRotation: 1 / 2 + 1 / 8,
    unit: "kms",
    colorTheme: "kms",
    valueProperty: "average_kms",
    labelProperty: "total_kms",
  },
};

export default function StatisticsBar({ metric, value }) {
  const circleRatio = metricsConfig[metric].circleRatio;
  const circleRotation = metricsConfig[metric].circleRotation;
  const metricValue = metricsConfig[metric].valueProperty;
  const metricLabel = metricsConfig[metric].labelProperty;
  const metricUnit = metricsConfig[metric].unit;
  let barPercentage;
  let percentage;

  if (metric === "progress") {
    barPercentage = value.attendance_last_7_days;
  } else {
    percentage =
      (value[metricValue] / metricsConfig[metric].recommendedValue) * 100;
    barPercentage = Math.round(percentage);
  }

  const getPathColor = (metric) => {
    let pathColor;

    if (metric === "progress") return "#d8f900";

    if (metric === "bmi") {
      switch (value.category) {
        case "Underweight":
          return "#fbbf24";
        case "Normal":
          return "#4ade80";
        case "Overweight":
          return "#fbbf24";
        case "Obesity":
          return "#f87171";
        default:
          return "#d1d5db";
      }
    } else {
      pathColor = "#f87171";
    }

    if (metric === "calories" || metric === "kms") {
      if (barPercentage < 33) {
        pathColor = "#f87171";
      } else if (barPercentage < 66) {
        pathColor = "#fbbf24";
      } else {
        pathColor = "#4ade80";
      }
    }

    return pathColor;
  };

  return (
    <div className="w-32">
      <CircularProgressbarWithChildren
        value={barPercentage}
        strokeWidth={8}
        circleRatio={circleRatio}
        styles={buildStyles({
          rotation: `${circleRotation}`,
          strokeLinecap: "butt",
          pathColor: `${getPathColor(metric)}`,
          trailColor: "#FFFFFF",
        })}
      >
        <div className="flex flex-col items-center justify-center h-full text-white text-center">
          <span className="text-sm">{`${value[metricLabel]} ${
            metric == "calories" || metric == "kms" ? metricUnit : ""
          } `}</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
