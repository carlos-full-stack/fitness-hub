import Header from "../components/header";
import Panel from "../components/panel";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full my-5 md:my-8 lg:my-12 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1200px] xxl:w-[1500px] mx-auto">
      <Header />
      <Panel />
      <Footer />
    </div>
  );
}
