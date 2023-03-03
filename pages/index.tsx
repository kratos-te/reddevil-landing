import Header from "../components/Header";
import Footer from "../components/Footer";
import Story from "../components/Story";
import Landing from "../components/Landing/index";
import Gallery from "../components/Gallery/index";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import Team from "../components/Team";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Landing />
      <Gallery />
      <Story />
      <Team />
      <Roadmap />
      <Faq />
    </div>
  );
}
