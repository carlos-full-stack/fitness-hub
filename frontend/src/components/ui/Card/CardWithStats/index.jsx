import Card from "..";
import StatisticsBar from "./StatisticsBar";
import StatisticsTrend from "./StatisticsTrend";

const cardTypes = {
  bar: StatisticsBar,
  trend: StatisticsTrend,
};

export default function CardWithStats({ title, variant, type, value }) {
  const Component = cardTypes[type];

  const children = (
    <div className="flex flex-col gap-2 p-6 min-h-[220px]">
      <h3 className="text-xl">{title}</h3>
      <Component variant={variant} value={value} />
    </div>
  );

  return <Card children={children} bgColor="light" />;
}
