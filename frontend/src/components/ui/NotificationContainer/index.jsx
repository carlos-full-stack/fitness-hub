import { useNotifications } from "../../../context/NotificationContext";
import NotificationItem from "./NotificationItem";

export default function NotificationContainer() {
  const { notifications } = useNotifications();

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 w-60 md:w-80">
      {notifications.map((item) => (
        <NotificationItem
          key={item.id}
          id={item.id}
          type={item.type}
          title={item.title}
          message={item.message}
        />
      ))}
    </div>
  );
}
