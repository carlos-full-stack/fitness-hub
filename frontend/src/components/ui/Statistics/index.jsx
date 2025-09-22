import { useEffect, useState } from "react";
import StatisticsItem from "./StatisticsItem";

export default function Statistics() {
  const [statistics, setStatistics] = useState({
    workouts: 0,
    years: 0,
    goals: 0,
  });

  useEffect(() => {
    if (
      statistics.workouts < 40 ||
      statistics.years < 12 ||
      statistics.goals < 25
    ) {
      const timeOutId = setTimeout(() => {
        setStatistics({
          ...statistics,
          workouts:
            statistics.workouts < 40
              ? statistics.workouts + 1
              : statistics.workouts,
          years:
            statistics.years < 12 ? statistics.years + 1 : statistics.years,
          goals:
            statistics.goals < 25 ? statistics.goals + 1 : statistics.goals,
        });
      }, 50);

      return () => clearTimeout(timeOutId);
    }
  }),
    [statistics];

  return (
    <ul className="inline-flex gap-6 md:gap-8">
      {Object.entries(statistics).map(([text, number]) => (
        <li key={text}>
          <StatisticsItem text={text} number={number} />
        </li>
      ))}
    </ul>
  );
}
