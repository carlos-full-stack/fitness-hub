import { useEffect, useState } from "react";
import { useNotifications } from "../../context/NotificationContext";
import axios from "axios";
import CardGallery from "../ui/Card/CardGallery";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import CardWithAutoForm from "../ui/Card/CardWithForm/CardWithAutoForm";
import useDashboardData from "../../hooks/useDashboardData";
import AddWorkout from "./AddWorkout";

import { getApiUrl } from "../../tools/apiUrl";

const formFields = [
  { id: 1, type: "text", name: "name", placeholder: "Name" },
  {
    id: 2,
    type: "text",
    name: "last_name",
    placeholder: "Last name",
  },
  {
    id: 3,
    type: "text",
    name: "weight",
    placeholder: "Weight",
    units: "KG",
    updatable: true,
  },
  {
    id: 4,
    type: "text",
    name: "height",
    placeholder: "Height",
    units: "CM",
    updatable: true,
  },
  {
    id: 5,
    type: "select",
    name: "plan_id",
    label: "Current plan",
  },
  {
    id: 6,
    type: "number",
    name: "weekly_goal_days",
    min: 0,
    max: 7,
    label: "Weekly goal",
  },
];

const dashboardCards = [
  {
    id: 1,
    title: "BMI",
    metric: "bmi",
    value: { category: null, imc: null },
  },
  {
    id: 2,
    title: "Progress",
    metric: "progress",
    value: { category: null, attendance_progress: null },
  },
  {
    id: 3,
    title: "Calories",
    metric: "calories",
    value: { total_calories: null, calories_progress: 0 },
  },
  {
    id: 4,
    title: "Kms",
    metric: "kms",
    value: { total_kms: null, kms_progress: 0 },
  },
];

export default function Panel() {
  const { data, loading, refetch } = useDashboardData();
  const [plansData, setPlansData] = useState([]);
  const [dashBoardCards, setdashBoardCards] = useState(dashboardCards);
  const { showError } = useNotifications();

  useEffect(() => {
    if (data) {
      const updatedDashBoardCards = dashboardCards.map((card) => {
        switch (card.id) {
          case 1:
            return { ...card, value: data.bmi };
          case 2:
            return { ...card, value: data.attendance };
          case 3:
            return { ...card, value: data.calories };
          case 4:
            return { ...card, value: data.kms };
          default:
            return card;
        }
      });
      setdashBoardCards(updatedDashBoardCards);
    }
  }, [data]);

  useEffect(() => {
    let isMounted = true;
    async function fetchPlans() {
      try {
        const response = await axios.get(getApiUrl("/plans"));
        if (isMounted && response) setPlansData(response.data.plans);
      } catch (error) {
        showError(error.response.data.message);
      }
    }
    fetchPlans();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="md:flex-auto">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Heading level="h3" headingText="Dasboard" />
              <span className="text-gray-400 text-base uppercase pl-2">
                (Last 7 days)
              </span>
            </div>
            <AddWorkout onFormUpdate={refetch} />
          </div>
          <CardGallery type="stats" cards={dashBoardCards} loading={loading} />
        </div>
        <div className="w-full md:w-80 md:flex-none">
          <CardWithAutoForm
            plansData={plansData}
            formFields={formFields}
            onFormUpdate={refetch}
          />
        </div>
      </div>
    </Section>
  );
}
