import Card from "..";

export default function CardWithStats({ title }) {
  const children = (
    <div className="flex flex-col gap-2 p-6">
      <h3 className="text-xl">{title}</h3>
    </div>
  );

  return <Card children={children} bgColor="primary" />;
}
