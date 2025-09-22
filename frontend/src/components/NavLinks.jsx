import { useNavigate, Link } from "react-router-dom";
import SquareArrowOutIcon from "./ui/SquareArrowOutIcon";
import { useAuth } from "../context/AuthContext";

const pageLinks = [
  { id: 1, text: "Home", url: "#home" },
  { id: 2, text: "Who we are", url: "#who" },
  { id: 3, text: "Plans", url: "#pricing" },
  { id: 4, text: "Articles", url: "#articles" },
];

const userLinks = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Dashboard", url: "/dashboard" },
  { id: 3, text: "Logout", url: "/logout" },
];

const NavLinksType = {
  user: {
    id: 1,
    name: "user",
    links: userLinks,
    style: "flex-col h-full text-2xl md:text-3xl gap-3",
  },

  page: {
    id: 2,
    name: "page",
    links: pageLinks,
    style: "flex-col lg:flex-row justify-center text-base gap-3",
  },
};

export default function NavLinks({ type = "page" }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const navigationLinks = NavLinksType[type];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <ul className={`flex ${navigationLinks["style"]} text-white`}>
      {navigationLinks["links"].map((item) =>
        item.text === "Logout" ? (
          <li
            onClick={handleLogout}
            className="flex items-center gap-3 absolute bottom-10"
            key={item.id}
          >
            <span className="hover:text-primary cursor-pointer">
              {item.text}
            </span>
            <SquareArrowOutIcon />
          </li>
        ) : (
          <li key={item.id}>
            <Link to={item.url}>{item.text}</Link>
          </li>
        )
      )}
    </ul>
  );
}
