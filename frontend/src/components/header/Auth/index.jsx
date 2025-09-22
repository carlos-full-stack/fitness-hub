import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  return (
    <div className="flex items-center gap-3 md:gap-6">
      <Login />
      <Register />
    </div>
  );
}
