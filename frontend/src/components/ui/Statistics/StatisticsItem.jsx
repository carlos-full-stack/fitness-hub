export default function StatisticsItem({ number, text }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        {number && (
          <span className="text-3xl md:text-5xl lg:text-3xl xl:text-5xl text-stroke mr-2">
            {number}
          </span>
        )}
        {text !== "years" ? (
          <span className="text-xl">K</span>
        ) : (
          <span className="text-2xl">+</span>
        )}
      </div>
      {text && <span className="text-xl capitalize">{text}</span>}
    </div>
  );
}
