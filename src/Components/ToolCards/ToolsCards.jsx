import React, { use, useState } from "react";
import Writting from "../../assets/writing_2327400 1.png";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const ToolsCards = ({
  dataPromised,
  setSelectedProduct,
  selectedProduct,
  setRenderCard,
  renderCard,
}) => {
  const pricingData = use(dataPromised);
  const [totalPrice, setTotalPrice] = useState(0);

  const buyHandle = (item) => {
    if (
      !selectedProduct.find((selectedItem) => selectedItem.name === item.name)
    ) {
      setSelectedProduct([...selectedProduct, item]);
      setTotalPrice((preprice) => preprice + item.price);
      toast.success(item.name + " are added to your cart");
    } else {
      toast.error("This product already exist in your cart");
    }
  };

  const handleCheckOut = () => {
    toast.success(selectedProduct.length + " Order placed successfully!");
    setSelectedProduct([]);
    setTotalPrice(0);
  };

  const handleRemoveAll = () => {
    toast.warning("Ohh! You deleted all item from your cart");
    setSelectedProduct([]);
    setTotalPrice(0);
  };

  const handleDelete = (item) => {
    const fiterProducts = selectedProduct.filter(
      (filterItem) => filterItem.name !== item.name
    );
    setSelectedProduct([...fiterProducts]);
    setTotalPrice((prePrice) => prePrice - item.price);
    toast.warning("Ohh! You delete " + item.name + " from your cart");
  };

  return (
    <section className="py-30 max-w-300 w-[95%] lg:w-[75%] mx-auto space-y-10">
      <div className="tool-top grid justify-items-center text-center">
        <h1 className="text-5xl font-extrabold ">Premium Digital Tools</h1>
        <p className="my-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="tool-btn grid grid-cols-2 gap-4 border border-[#F6F6F6] shadow-[0_0_2px_black] rounded-full p-1">
          <button
            onClick={() => setRenderCard(true)}
            className={`px-4 py-3 ${
              renderCard ? "lenear-bg text-white" : "bg-none"
            } rounded-full  font-bold`}
          >
            Products
          </button>
          <button
            onClick={() => setRenderCard(false)}
            className={`font-bold ${
              !renderCard ? "lenear-bg text-white" : "bg-none"
            } rounded-full`}
          >
            cart {`(${selectedProduct.length})`}
          </button>
        </div>
      </div>

      <div className="tool-bottom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-[#627382] line-clamp-2">
                  {item.description}
                </p>
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
          <div className="p-10 col-span-3 space-y-4 shadow-[0_0_2px_black] rounded-2xl">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Your Cart</h1>
              <h1
                onClick={() => handleRemoveAll()}
                className="text-red-600 bg-red-100 px-4 py-2 rounded-full cursor-pointer"
              >
                REMOVE ALL
              </h1>
            </div>
            {selectedProduct.map((item) => {
              return (
                <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center p-6 bg-[#F9FAFC] rounded-2xl">
                  <div className="cart-left flex gap-2">
                    <img
                      src={item.image}
                      className="w-15 h-15 bg-white p-2 rounded-full overflow-visible"
                      alt=""
                    />
                    <div className="content space-y-2">
                      <h1 className="text-[20px] font-semibold">{item.name}</h1>
                      <p className="text-[#627382]">${item.price}</p>
                    </div>
                  </div>

                  <div className="right">
                    <h1
                      className="text-red-600 cursor-pointer"
                      onClick={() => handleDelete(item)}
                    >
                      Remove
                    </h1>
                  </div>
                </div>
              );
            })}
            <div className="total flex justify-between">
              <p className="text-[#627382]">Total:</p>
              <h2 className="text-2xl font-bold">${totalPrice}</h2>
            </div>
            <button
              onClick={() => handleCheckOut()}
              className="lenear-bg text-white py-3 rounded-full w-full mt-6"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <div className="shadow-[0_0_2px_black] col-span-3 flex items-center justify-center py-10 rounded-2xl">
            <h1 className="text-3xl font-bold">
              Your Cart Is Empty! Buy Something
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsCards;
