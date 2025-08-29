import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function CardWithAutoForm({ plansData, formFields }) {
  const [formData, setFormData] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const debounceRef = useRef(null);

  useEffect(() => {
    async function fetchUserData() {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        response && setFormData(response.data.user);
      } catch (error) {
        console.error("Error displaying data", error);
      }
    }

    fetchUserData();
  }, []);

  const handleOnChange = (e) => {
    let newFormData;

    if (e.target.name === "plan_id") {
      const parsedValue = parseInt(e.target.value);

      console.log("el valor parseado es ", parsedValue);

      newFormData = { ...formData, [e.target.name]: parsedValue };
    } else {
      newFormData = { ...formData, [e.target.name]: e.target.value };
    }

    setFormData(newFormData);

    debounceRef.current && clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {

      handleSubmit();
    }, 2000);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("/api/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response && response.data.user) {
        console.log("Se actualizaron los datos");
      }
    } catch (error) {
      console.log(error);
      const fieldErrors = error.response.data.error;
      fieldErrors && setFieldErrors(fieldErrors);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full p-6 bg-gray-700">
      <div className="flex flex-col items-center justify-center gap-6 mb-3">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          data-slot="icon"
          aria-hidden="true"
          className="size-32 text-gray-300"
        >
          <path
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          />
        </svg>
        <button
          type="button"
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
        >
          Change
        </button>
      </div>
      <form className="grid grid-cols-2 gap-3 w-full">
        {formFields.map((field, index) => (
          <div
            className={`flex flex-col w-full ${
              field.id !== 5 && field.id !== 6 ? "col-span-2" : ""
            }`}
          >
            {field.type === "select" ? (
              <>
                <label id="plans" className="text-white pb-3">
                  {field.label}
                </label>
                <select
                  key={index}
                  id="plans"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleOnChange}
                  className="w-full md:size-auto border bg-white py-2 pr-3 pl-2 focus:outline-none"
                >
                  {plansData.map((plan, index) => (
                    <option key={index} value={plan.id}>
                      {plan.name}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                className={`w-full md:size-auto border ${
                  fieldErrors[field.name] ? "border-red-500" : "border-gray-800"
                } w-full bg-white py-2 pr-3 pl-2 focus:outline-none`}
                onChange={handleOnChange}
              />
            )}
            <span className="text-sm pt-2">
              {fieldErrors[field.name] && fieldErrors[field.name][0]}
            </span>
          </div>
        ))}
      </form>
    </div>
  );
}
