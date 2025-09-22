import Card from "..";
import LoadingIcon from "../../LoadingIcon";
import StatisticsBar from "./StatisticsBar";

export default function CardWithStats({ title, metric, value, loading }) {
  const showData = loading ? (
    <LoadingIcon width={100} height={100} />
  ) : (
    <StatisticsBar metric={metric} value={value} />
  );

  const children = (
    <div className="flex flex-col gap-2 p-6 min-h-[220px]">
      <h3 className="text-xl">{title}</h3>
      <div className="w-full flex flex-col items-center justify-center grow">
        {showData}
      </div>
    </div>
  );

  return <Card children={children} bgColor="light" />;
}
