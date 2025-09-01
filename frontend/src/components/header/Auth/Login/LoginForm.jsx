import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import Button from "../../../ui/Button";

export default function LoginForm({
  loginFormFields,
  setLoginState,
  onLoginSuccess,
}) {
  const { login, setUser } = useAuth();

  const [formValues, setFormValues] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const handleImputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loggedInUser = await login(formValues);

      setLoginState("success");
      onLoginSuccess();

      setTimeout(() => {
        setUser(loggedInUser);
      }, 2000);
    } catch (error) {
      const fieldErrors = error.response?.data?.errors;
      fieldErrors && setFieldErrors(fieldErrors);
      setLoginState("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-3"
    >
      {loginFormFields.map((field, index) => (
        <div key={index} className="flex flex-col w-full md:size-auto">
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formValues[field.name] || ""}
            onChange={handleImputChange}
            className={`w-full md:size-auto border ${
              fieldErrors[field.name] ? "border-red-500" : "border-gray-800"
            } py-2 pr-3 pl-2 focus:outline-none`}
          />
          <span className="text-sm pt-2">
            {fieldErrors[field.name] && fieldErrors[field.name][0]}
          </span>
        </div>
      ))}
      <div className="pt-3">
        <Button text="Login" color="dark" type="submit" />
      </div>
    </form>
  );
}
