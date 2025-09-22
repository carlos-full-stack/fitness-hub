import { useEffect, useRef, useState } from "react";
import axios from "axios";
import UserAvatar from "../../../header/Auth/UserAvatar";
import { useAuth } from "../../../../context/AuthContext";
import { useNotifications } from "../../../../context/NotificationContext";
import Button from "../../Button";

export default function CardWithAutoForm({
  plansData,
  formFields,
  onFormUpdate,
}) {
  const [userData, setuserData] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const debounceRef = useRef(null);
  const fileInputRef = useRef(null);
  const { user, setUser } = useAuth();
  const { showSuccess, showError } = useNotifications();

  useEffect(() => {
    if (user) {
      setuserData(user);
    }
  }, [user]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleOnChange = (e) => {
    let newUserData;

    if (e.target.name === "plan_id") {
      const parsedValue = parseInt(e.target.value);
      newUserData = { ...userData, [e.target.name]: parsedValue };
    } else if (e.target.type === "file") {
      newUserData = { ...userData, [e.target.name]: e.target.files[0] };
    } else {
      newUserData = { ...userData, [e.target.name]: e.target.value };
    }

    setuserData(newUserData);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (e.target.type === "file" || e.target.name === "plan_id") {
      handleSubmit(newUserData);
    } else {
      debounceRef.current = setTimeout(() => {
        handleSubmit(newUserData);
      }, 1000);
    }
  };

  const handleSubmit = async (dataToSend = userData) => {
    const token = localStorage.getItem("token");
    const formDataToSend = new FormData();

    Object.entries(dataToSend).forEach(([key, value]) => {
      if (key === "user_url") {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        }
      } else {
        if (value !== null && value !== undefined) {
          formDataToSend.append(key, value);
        }
      }
    });

    try {
      const response = await axios.post("/api/user/update", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response && response.data.user) {
        setUser(response.data.user);
        setFieldErrors({});
        showSuccess(response.data.message);
        onFormUpdate();
      }
    } catch (error) {
      const fieldErrors = error.response?.data?.errors;
      fieldErrors && setFieldErrors(fieldErrors);
      showError(error.response.data.message);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return (
    <form className="flex flex-col gap-5 w-full p-6 bg-gray-700">
      <div className="flex flex-col items-center justify-center gap-6 mb-3">
        <UserAvatar size={145} />
        <input
          type="file"
          name="user_url"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleOnChange}
        />
        <div className="flex flex-row gap-2">
          <Button
            text="Upload photo"
            color="transparent"
            onClick={handleButtonClick}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        {formFields.map((field, index) => (
          <div
            key={index}
            className={`flex flex-col w-full ${
              field.id !== 3 &&
              field.id !== 4 &&
              field.id !== 5 &&
              field.id !== 6
                ? "col-span-2"
                : ""
            }`}
          >
            {field.type === "select" ? (
              <>
                <div className="flex flex-col w-full relative">
                  <label htmlFor={field.id} className="text-white ">
                    {field.label}
                  </label>
                  <select
                    name={field.name}
                    value={userData[field.name] || ""}
                    onChange={handleOnChange}
                    className="w-full border bg-white py-2 pr-3 pl-2 h-10 focus:outline-none"
                  >
                    {plansData.map((plan, planIndex) => (
                      <option key={planIndex} value={plan.id}>
                        {plan.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <div
                className={`${
                  field.id === 8 ? "flex flex-col gap-2" : ""
                } w-full relative`}
              >
                <label htmlFor={field.id} className="text-white ">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={userData[field.name] || ""}
                  min={field.id === 8 ? field.min : ""}
                  max={field.id === 8 ? field.max : ""}
                  className={`w-full border ${
                    fieldErrors[field.name]
                      ? "border-red-500"
                      : "border-gray-800"
                  } bg-white py-2 pr-3 pl-2 h-10 focus:outline-none`}
                  maxLength={
                    field.name === "weight" || field.name === "height"
                      ? 3
                      : undefined
                  }
                  onChange={handleOnChange}
                />
                {(field.name === "weight" || field.name === "height") && (
                  <span className="text-md text-gray-400 absolute top-2 right-3 pointer-events-none">
                    {field.units}
                  </span>
                )}
              </div>
            )}
            <span className="text-sm text-white pt-2">
              {fieldErrors[field.name] && fieldErrors[field.name][0]}
            </span>
          </div>
        ))}
      </div>
    </form>
  );
}
