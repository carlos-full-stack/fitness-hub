import { useState } from "react";
import { useNotifications } from "../../../../context/NotificationContext";
import Card from "..";
import Button from "../../Button";

export default function CardWithSubmitForm({ formFields, title, subtitle }) {
  const [userData, setuserData] = useState({});
  const { showSuccess } = useNotifications();

  const handleImputChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showSuccess("Thanks for subscribing");

    setuserData({});
  };

  const children = (
    <div className="flex flex-col justify-center align-middle gap-12 w-full h-full p-7">
      <div className="flex flex-col text-center gap-4">
        <h3 className="text-3xl md:text-5xl">{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row justify-center gap-5"
        >
          <div className="flex flex-col md:flex-row gap-3 w-full md:size-auto">
            {formFields.map((field) => (
              <label key={field.id} htmlFor={field.name}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={userData[field.name] || ""}
                  onChange={handleImputChange}
                  className="w-full md:size-auto bg-white py-2 pr-3 pl-2 focus:outline-none"
                  required
                  minLength={3}
                />
              </label>
            ))}
          </div>
          <Button text="Subscribe now!" color="dark" type="submit" />
        </form>
      </div>
    </div>
  );

  return <Card children={children} bgColor="primary" />;
}
