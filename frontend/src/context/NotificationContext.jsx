import { createContext, useState, use } from "react";

const NotificationContext = createContext(null);

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const isOpen = notifications.length > 0;

  const addNotification = (newNotification) => {
    const newNotificationWithId = {
      ...newNotification,
      id: crypto.randomUUID(),
    };

    setNotifications((prev) => [...prev, newNotificationWithId]);

    setTimeout(() => {
      removeNotification(newNotificationWithId.id);
    }, 5000);
  };
  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, isOpen, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

const useNotifications = () => {
  const context = use(NotificationContext);

  if (!context)
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );

  const { notifications, isOpen, addNotification, removeNotification } =
    context;

  const showSuccess = (message, title = "Success") => {
    addNotification({ type: "success", title, message });
  };
  const showError = (message, title = "Error") => {
    addNotification({ type: "error", title, message });
  };
  const showInfo = (message, title = "Info") => {
    addNotification({ type: "info", title, message });
  };

  return {
    notifications,
    isOpen,
    showSuccess,
    showError,
    showInfo,
    removeNotification,
  };
};

export { NotificationContext, NotificationProvider, useNotifications };
