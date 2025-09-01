import { useEffect, useState } from "react";
import axios from "axios";
import CardGallery from "../ui/Card/CardGallery";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import CardWithAutoForm from "../ui/Card/CardWithForm/CardWithAutoForm";

const dashBoardCards = [
  { id: 1, title: "BMI" },
  { id: 2, title: "Progress" },
  { id: 3, title: "Calories" },
  { id: 4, title: "Kms" },
];

const formFields = [
  { id: 1, type: "text", name: "name", placeholder: "Name" },
  {
    id: 2,
    type: "text",
    name: "last_name",
    placeholder: "Last name",
  },
  { id: 5, type: "text", name: "weight", placeholder: "Weight", units: "KG" },
  { id: 6, type: "text", name: "height", placeholder: "Height", units: "CM" },
  {
    id: 7,
    type: "select",
    name: "plan_id",
    label: "Current plan",
  },
];

export default function Panel() {
  const [plansData, setPlansData] = useState([]);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await axios.get("api/plans");

        response && setPlansData(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchPlans();
  }, []);

  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="md:flex-auto">
          <Heading level="h3" headingText="Dasboard" />
          <CardGallery type="stats" cards={dashBoardCards} />
        </div>
        <div className="md:w-80 flex-none">
          <CardWithAutoForm plansData={plansData} formFields={formFields} />
        </div>
      </div>
    </Section>
  );
}
