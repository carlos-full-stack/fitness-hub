import PlusIcon from "./PlusIcon";

const baseClasses = "flex capitalize cursor-pointer py-2 px-4 rounded-sm";
const buttonColors = {
  primary: "text-gray-800 bg-primary hover:bg-primary-hover ",
  light: "text-white bg-gray-700 hover:bg-gray-700",
  dark: "text-white bg-gray-800 hover:bg-gray-900",
  transparent:
    "text-white bg-transparent border border-white hover:border-primary",
};

export default function Button({
  text,
  color = "primary",
  type = "button",
  icon = null,
  onClick = () => {},
}) {
  const buttonIcons = {
    plus: PlusIcon,
  };
  const ButtonIcon = buttonIcons[icon];
  const variantClasses = buttonColors[color];

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {ButtonIcon && (
        <span className="pr-2">
          <ButtonIcon />
        </span>
      )}
      {text}
    </button>
  );
}
