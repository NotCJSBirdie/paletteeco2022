import Hero from "./Hero";
import Header from "./Header";
import "./HeroandHeader.css";

const HeroandHeader = () => {
  return (
    <div id="body1" className="m-4 rounded-lg">
      <Header />
      <Hero />
    </div>
  );
};

export default HeroandHeader;
