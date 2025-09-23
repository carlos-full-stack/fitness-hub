import axios from "axios";
import { useState } from "react";
import Button from "../../ui/Button";
import { getApiUrl } from "../../../tools/apiUrl";

export default function AddWorkoutForm({
  workoutFormFields,
  setAddWorkoutState,
  onAddWorkoutSuccess,
  onFormUpdate,
}) {
  const [fieldValues, setFieldValues] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const token = localStorage.getItem("token");

  const handleImputChange = (e) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(getApiUrl("api/workout/store"), fieldValues, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response && response.data) {
        setAddWorkoutState("success");
        onAddWorkoutSuccess();
        onFormUpdate();
      }
    } catch (error) {
      const fieldErrors = error.response?.data?.errors;
      fieldErrors && setFieldErrors(fieldErrors);
      setAddWorkoutState("error");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-3"
      >
        {workoutFormFields.map((field, index) => (
          <div key={index} className="flex flex-col w-full md:size-auto">
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={fieldValues[field.name] || ""}
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
          <Button text="Save workout" color="dark" type="submit" />
        </div>
      </form>
    </div>
  );
}
