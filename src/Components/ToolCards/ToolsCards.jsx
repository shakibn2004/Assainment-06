import React, { use, useState } from "react";
import { toast } from "react-toastify";
import CardContainer from "./CardContainer";

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

      <CardContainer
        pricingData={pricingData}
        renderCard={renderCard}
        totalPrice={totalPrice}
        buyHandle={buyHandle}
        handleCheckOut={handleCheckOut}
        handleRemoveAll={handleRemoveAll}
        handleDelete={handleDelete}
        selectedProduct={selectedProduct}
        setRenderCard={setRenderCard}
      />
    </section>
  );
};

export default ToolsCards;
