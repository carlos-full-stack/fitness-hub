import Card from "..";
import Rating from "./Rating";

export default function CardWithRating({
  rating,
  feedback,
  userImgUrl,
  userName,
  userRole,
}) {
  const children = (
    <div className="flex flex-col justify-between gap-4 p-9 h-full">
      <div>
        <Rating stars={rating} />
        <p className="pt-3">{feedback}</p>
      </div>
      <div className="flex items-center w-full pl-1 gap-4">
        <img
          className="inline-block size-8 rounded-full ring-2 ring-white"
          src={userImgUrl}
        />
        <div className="flex flex-col gap">
          <span className="font-bold">{userName}</span>
          <span>{userRole}</span>
        </div>
      </div>
    </div>
  );

  return <Card children={children} bgColor="light" />;
}
