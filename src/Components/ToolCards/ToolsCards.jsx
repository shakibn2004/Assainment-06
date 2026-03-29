import React, { use } from "react";
import Writting from "../../assets/writing_2327400 1.png";
import { Check } from "lucide-react";

const ToolsCards = ({ dataPromised }) => {
  const pricingData = use(dataPromised);

  return (
    <section className="py-30 max-w-300 w-[75%] mx-auto space-y-10">
      <div className="tool-top grid justify-items-center text-center">
        <h1 className="text-5xl font-extrabold ">Premium Digital Tools</h1>
        <p className="my-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="tool-btn grid grid-cols-2 gap-4 border border-[#F6F6F6] shadow-[0_0_2px_black] rounded-full p-1">
          <button className="px-4 py-3 lenear-bg rounded-full text-white font-bold">
            Products
          </button>
          <button>cart(2)</button>
        </div>
      </div>

      <div className="tool-bottom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingData.map((item) => {
          return (
            <div className="tool-card space-y-4 p-6 shadow-[0_0_2px_black] rounded-2xl transition-all duration-700 hover:scale-105">
              <div className="flex justify-between">
                <img
                  className="w-fit h-fit p-3 shadow-[0_0_2px_black]/40 rounded-full flex items-center justify-center mt-1"
                  src={Writting}
                  alt="Writting"
                />
                <h4
                  className={`mr-0 h-fit px-3 py-2 rounded-full ${
                    item.tagType === "best-seller" 
                    ? "bg-[#FEF3C6] text-[#BB4D00]" 
                    : item.tagType === "popular" 
                    ? "lenear-color" 
                    : "bg-[#DBFCE7] text-[#0A883E]"}`}
                >
                  {item.tagType}
                </h4>
              </div>
              <div className="title">
                <h1 className="text-2xl font-bold text-[#101727]">
                  {item.name}
                </h1>
              </div>
              <p className="text-[#627382] line-clamp-2">{item.description}</p>
              <div className="price">
                <h3 className="text-2xl font-bold">
                  ${item.price}
                  <span className="text-sm font-medium">/mo</span>
                </h3>
              </div>
              <ul className="feature">
                {item.features.map((nestItem) => {
                  return (
                    <li className="flex gap-2 text-[#627382]">
                      <Check color="#30B868" /> {nestItem}
                    </li>
                  );
                })}
              </ul>
              <button className="lenear-bg w-full py-3 rounded-full text-white">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolsCards;
