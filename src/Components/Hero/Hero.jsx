import Online from "../../assets/Group 5.png";
import Play from "../../assets/Play.png"
import Banner from "../../assets/banner.png"

const Hero = () => {
  return (
    <section className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 gap-15 max-w-300 w-[95%] lg:w-[75%] mx-auto place-items-center py-15">
      <div className="hero-start grid justify-items-center lg:justify-items-start lg:row-start-1">
        <div className="flex gap-2 items-center bg-[#E1E7FF] w-fit px-4 py-2 rounded-full">
          <img src={Online} className="h-fit" alt="" />
          <h4 className="lenear-color">New: AI-Powered Tools Available</h4>
        </div>
        <h1 className="my-4 text-6xl font-extrabold leading-20 py-5">Supercharge Your Digital Workflow</h1>
        <p className="text-[#627382] text-wrap text-xl mb-8">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="hero-btn flex gap-4">
          <button className="lenear-bg rounded-full px-4 py-3 text-white">Explore Products</button>
          <button className="flex gap-2 lenear-border items-center  rounded-full px-4 py-3"><img src={Play} className="w-5 h-fit mr-[]" alt="Play Button" />Watch Demo</button>
        </div>
      </div>

      <div className="hero-right row-start-1">
        <img src={Banner} alt="Hero Banner" />
      </div>
    </section>
  );
};

export default Hero;
