import { Check } from "lucide-react";
import SelectedCards from "./SelectedCards";
import { BsCart4 } from "react-icons/bs";

const CardContainer = ({
  pricingData,
  selectedProduct,
  renderCard,
  totalPrice,
  buyHandle,
  handleCheckOut,
  handleRemoveAll,
  handleDelete,
  setRenderCard,
}) => {
  return (
    <div className="card-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {renderCard ? (
        pricingData.map((item) => {
          return (
            <div className="tool-card space-y-4 p-6 shadow-[0_0_2px_black] rounded-2xl transition-all duration-700 hover:scale-105">
              <div className="flex justify-between">
                <img
                  className="w-fit h-fit p-3 shadow-[0_0_2px_black]/40 rounded-full flex items-center justify-center mt-1 overflow-visible"
                  src={item.image}
                  alt="Writting"
                />
                <h4
                  className={`mr-0 h-fit px-3 py-2 rounded-full ${
                    item.tagType === "best-seller"
                      ? "bg-[#FEF3C6] text-[#BB4D00]"
                      : item.tagType === "popular"
                      ? "lenear-color"
                      : "bg-[#DBFCE7] text-[#0A883E]"
                  }`}
                >
                  {item.tag}
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
                  <span className="text-sm font-medium">/{item.period}</span>
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
              <button
                onClick={() => buyHandle(item)}
                className="lenear-bg w-full py-3 rounded-full text-white"
              >
                {selectedProduct.find(
                  (selectedItem) => selectedItem.name === item.name
                )
                  ? "ADDED TO CART"
                  : "BUY NOW"}
              </button>
            </div>
          );
        })
      ) : selectedProduct.length !== 0 ? (
        <SelectedCards
          selectedProduct={selectedProduct}
          totalPrice={totalPrice}
          handleCheckOut={handleCheckOut}
          handleRemoveAll={handleRemoveAll}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="shadow-[0_0_2px_black] space-y-4 col-span-3 flex flex-col items-center justify-center py-10 rounded-2xl">
          <BsCart4 size={70} color="#627382" />
          <h1 className="text-2xl lg:text-3xl font-bold px-3 text-center">
            Your Cart Is Currently Empty!
          </h1>
          <button
            onClick={() => setRenderCard(true)}
            className="lenear-bg px-4 py-2 rounded-full text-white text-base font-bold mt-4"
          >
            Return To Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
