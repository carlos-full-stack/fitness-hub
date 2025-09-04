import Card from "..";
import StatisticsBar from "./StatisticsBar";
import StatisticsTrend from "./StatisticsTrend";

const cardTypes = {
  bar: StatisticsBar,
  trend: StatisticsTrend,
};

export default function CardWithStats({ title, type, value }) {
  const Component = cardTypes[type];

  const children = (
    <div className="flex flex-col gap-2 p-6">
      <h3 className="text-xl">{title}</h3>
      <Component value={value} />
    </div>
  );

  return <Card children={children} bgColor="primary" />;
}
