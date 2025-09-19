import {
  CheckIcon,
  ErrorIcon,
  InfoIcon,
  DefaultIcon,
  CloseIcon,
} from "./NotificationIcons";

import { useNotifications } from "../../../context/NotificationContext";

const themes = {
  success: { icon: CheckIcon, bgColor: "#4ade80" },
  error: { icon: ErrorIcon, bgColor: "#f87171" },
  info: { icon: InfoIcon, bgColor: "#60a5fa" },
  default: { icon: DefaultIcon, bgColor: "#9ca3af" },
};

export default function NotificationItem({ id, type, title, message }) {
  const { removeNotification } = useNotifications();

  const itemTheme = themes[type] || themes["default"];
  const bgColor = itemTheme.bgColor;
  const IconComponent = itemTheme.icon;

  return (
    <div
      className="flex gap-2 w-60 md:w-80 py-3 md:py-5 px-3 relative "
      style={{ backgroundColor: bgColor }}
    >
      <div
        onClick={() => removeNotification(id)}
        className="absolute right-4 top-4"
      >
        <CloseIcon />
      </div>
      <div className="flex justify-center items-center flex-1/5">
        <IconComponent />
      </div>
      <div className="flex flex-col justify-center gap-0.5 flex-4/5">
        <h3 className="text-md md:text-xl">{title}</h3>
        <span className="text-sm md:text-md">{message}</span>
      </div>
    </div>
  );
}
