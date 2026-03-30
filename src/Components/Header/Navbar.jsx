import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({selectedProduct, setRenderCard}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-10">
      <nav className="flex max-w-300 w-[75%] mx-auto justify-between items-center py-7">
        <div className="nav-start">
          <a className="text-4xl font-bold lenear-color py-1" href="#">
            DigiTools
          </a>
        </div>

        <div className="nav-middle hidden lg:block">
          <ul className="flex gap-8">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer hidden xl:block">Testimonials</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div className="nav-end gap-4 items-center hidden lg:flex">
          <div className="relative" onClick={()=>{setRenderCard(false)}}>
            <ShoppingCart className="cursor-pointer" />
            <div className={`${!selectedProduct.length?'hidden':'flex'} items-center justify-center w-4 h-4 bg-red-500 rounded-full absolute top-[-5px] left-[10px]`}><p className="text-white text-center text-sm">{selectedProduct.length}</p></div>
          </div>
          <button className="cursor-pointer">Login</button>
          <button className="font-semibold px-4 py-3 lenear-bg text-white rounded-full cursor-pointer">
            Get Started
          </button>
        </div>

        <div className="menu lg:hidden">
          <Menu size={48} onClick={() => setShowMenu(true)} />
          <div
            className={`fixed top-0 right-0 max-w-90 w-[80%] h-screen bg-white pl-9 transition-all duration-400 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"}`}
          >
            <X
              onClick={() => setShowMenu(false)}
              className="ml-auto mr-16 mt-8"
              size={48}
            />
            <button className="cursor-pointer text-2xl mt-9">Login</button>
            <div className="nav-middle my-6">
              <ul className="flex gap-6 flex-col text-2xl">
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Testimonials</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>
            <button className="font-semibold px-4 py-3 lenear-bg text-white rounded-full cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
