import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

export default function StatisticsBar({ variant, value }) {
  let barPercentage;
  let pathColor;

  if (variant === "BMI") {
    const maxIMC = 40;
    const percentage = (value.imc / maxIMC) * 100;
    barPercentage = Math.round(percentage);

    if (barPercentage <= 25) {
      pathColor = "#4ade80";
    } else if (barPercentage <= 50) {
      pathColor = "#fde047";
    } else if (barPercentage <= 75) {
      pathColor = "#fbbf24";
    } else {
      pathColor = "#f87171";
    }
  } else {
    barPercentage = value.attendance_progress;
    pathColor = "#d8f900";
  }

  return (
    <div className="w-full flex flex-col items-center justify-center grow">
      <div className="w-32">
        <CircularProgressbarWithChildren
          value={barPercentage}
          strokeWidth={8}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "butt",
            pathColor: `${pathColor}`,
            trailColor: "#FFFFFF",
          })}
        >
          <div className="flex flex-col items-center justify-center h-full text-white">
            <span className="text-sm">{value.category}</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}
//
