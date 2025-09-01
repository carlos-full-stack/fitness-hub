import { useState } from "react";
import Card from "..";
import Button from "../../Button";

export default function CardWithSubmitForm({ formFields, title, subtitle }) {
  const [userData, setuserData] = useState({});

  const handleImputChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado", userData);
    alert("Formulario enviado");

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
          className="flex flex-col md:flex-row justify-center gap-2"
        >
          {formFields.map((field, index) => (
            <div key={index} className="w-full md:size-auto">
              <label htmlFor={field.name}></label>
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={userData[field.name] || ""}
                onChange={handleImputChange}
                className="w-full md:size-auto bg-white py-2 pr-3 pl-2 focus:outline-none"
              />
            </div>
          ))}
          <Button text="Send" color="dark" type="submit" />
        </form>
      </div>
    </div>
  );

  return <Card children={children} bgColor="primary" />;
}
