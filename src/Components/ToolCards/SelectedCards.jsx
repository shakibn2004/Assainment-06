import React from "react";

const SelectedCards = ({
  selectedProduct,
  totalPrice,
  handleCheckOut,
  handleRemoveAll,
  handleDelete,
}) => {
  return (
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
      <div className="total flex justify-between items-center bg-black text-white mt-8 px-8 py-2 rounded-full">
        <p className="text-[#627382] text-2xl">Total:</p>
        <h2 className="text-4xl font-bold">${totalPrice}</h2>
      </div>
      <button
        onClick={() => handleCheckOut()}
        className="lenear-bg text-white py-3 rounded-full w-full mt-6"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SelectedCards;
