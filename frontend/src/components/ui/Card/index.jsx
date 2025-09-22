import styles from "./card.module.css";

const bgColorClasses = {
  light: "bg-gray-700",
  dark: "bg-gray-800",
  primary: "bg-primary",
  default: "bg-gray-800",
};

export default function Card({
  variant = "",
  bgUrl = "none",
  bgColor = "default",
  children = null,
}) {
  const backgroundImage = bgUrl !== "none" ? `url(${bgUrl})` : "none";

  const CardBgColor = bgColorClasses[bgColor];
  const textColor = bgColor !== "primary" ? "text-white" : "text-black";

  return (
    <div
      style={{
        backgroundImage: ` ${backgroundImage}`,
        backgroundSize: "cover",
      }}
      className={`${styles.cardBaseShape} ${CardBgColor} ${textColor} ${
        variant === "image" ? "h-[350px]" : "h-auto"
      } relative transition-transform duration-300 hover:scale-105`}
    >
      {children}
    </div>
  );
}
