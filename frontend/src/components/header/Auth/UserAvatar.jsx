import UserIcon from "../NavMenu/UserIcon";
import { useAuth } from "../../../context/AuthContext";

export default function UserAvatar({ size = 50 }) {
  const { user } = useAuth();
  const sizeClasses = `rounded-full object-cover`;
  let imageUrl = null;

  if (user && user.user_url) {
    if (typeof user.user_url === "string") {
      imageUrl = `${import.meta.env.VITE_API_BASE_URL}${user.user_url}`;
    } else if (user.user_url instanceof File) {
      imageUrl = URL.createObjectURL(user.user_url);
    }
  }

  return (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={user?.name || "Avatar"}
          className={sizeClasses}
          style={{ width: size, height: size }}
        />
      ) : (
        <UserIcon size={size} />
      )}
    </>
  );
}
