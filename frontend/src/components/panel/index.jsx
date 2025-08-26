import CardGallery from "../ui/Card/CardGallery";
import Card from "../ui/Card";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

const dashBoardCards = [
  { id: 1, title: "BMI" },
  { id: 2, title: "Progress" },
  { id: 3, title: "Calories" },
  { id: 4, title: "Kms" },
];

export default function Panel() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-2/3">
          <Heading level="h3" headingText="Dasboard" />
          <CardGallery type="stats" cards={dashBoardCards} />
        </div>
        <div className="flex-1/3 bg-gray-500">Sidebar</div>
      </div>
    </Section>
  );
}
