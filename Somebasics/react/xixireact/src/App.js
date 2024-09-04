// Dependencies
import React from "react";

// Styles
import "./tailwind.output.css";

import imgThinker from "./thinker.png";

import imgXmas from "./hat_xmas.png";
import imgWool from "./hat_wool.png";
import imgPolice from "./hat_police.png";
import imgPirate from "./hat_pirate.png";
import imgFlower from "./hat_ladyFlower.png";
import imgHarry from "./hat_Harry.png";
import imgElegant from "./hat_elegant.png";
import imgChef from "./hat_chef.png";
import imgCap from "./hat_cap.png";
import imgBall from "./hat_ball.png";

import { FiShoppingCart } from "react-icons/fi";
import {
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef
} from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

function SearchBar() {
  return (
    <form
      id="SearchBar"
      className="space-x-0.5 flex"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Hang on, I'll search it for you!");
      }}
    >
      <input type="string" className="text-black px-1" />
      <button className="border-white border p-0.5 px-2 rounded-sm">
        Search
      </button>
    </form>
  );
}

function ShoppingCart({ count }) {
  return (
    <div className="relative m-1" id="ShoppingCart">
      <FiShoppingCart size={20} />
      <div
        className="absolute -right-2 -top-2 rounded-full w-4 h-4 flex justify-center items-center bg-pink-600"
        style={{ fontSize: "0.5rem", right: -8, top: -8 }}
      >
        <AnimatePresence>
          <motion.div
            className="absolute"
            key={count}
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            {count}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Header({ countInCart }) {
  return (
    <header id="Header">
      <ul className="flex space-x-6 items-center p-3 text-sm bg-gray-900 text-white">
        <li>Home</li>
        <li>
          <SearchBar />
        </li>
        <li>Account</li>
        <li>Return &amp; Orders</li> 
        <li className="flex-1 flex justify-end">
          <ShoppingCart count={countInCart} />
        </li>
      </ul>
    </header>
  );
}

function Domo() {
  return <img alt="Domo" src={imgThinker} width={220} height={220} />;
}

const hats = {
  // Cap: imgHatCap,
  // 'Harry Potter': imgHatHarryPotter,
  // Leprechaun: imgHatLeprechaun,
  // Pirate: imgHatPirate,
  // Propeller: imgHatPropeller,
  Cap: imgCap,
  Christmas: imgXmas,
  Wool: imgWool,
  Police: imgPolice,
  Pirate: imgPirate,
  Flower: imgFlower,
  "Harry Potter": imgHarry,
  Elegant: imgElegant,
  Chef: imgChef,
  Ball: imgBall
};

function Hat({ type, className, small, style }) {
  const ratio = 396 / 865;
  const smallWidth = 80;
  const largeWidth = 200;
  return (
    <div className={className} style={style}>
      <motion.img
        alt={type}
        className="rotate-12 transform"
        style={{ rotate: 12 }}
        src={hats[type]}
        width={small ? smallWidth : largeWidth}
        height={small ? smallWidth * ratio : largeWidth * ratio}
      />
    </div>
  );
}

function DomoWithHat({ hat }) {
  return (
    <div className="relative flex-shrink-0" id="DomoWithHat">
      <Domo />
      <Hat
        type={hat}
        className="absolute left-12 -top-1"
        style={{ left: 8, top: -10, transform: "translateX(40px)" }}
      />
    </div>
  );
}

function Main({ onAddToCart }) {
  const hatNames = Object.keys(hats);
  const [activeHat, setActiveHat] = useState(hatNames[0]);
  return (
    <main className="p-3 flex justify-around min-h-full" id="Main">
      <DomoWithHat hat={activeHat} />
      <div className="flex flex-col justify-center space-y-3 items-start">
        <h2 className="text-2xl">{activeHat}</h2>
        <div>$50</div>
        <div className="grid gap-1 grid-cols-5">
          {hatNames.map((hat) => (
            <div
              key={hat}
              className={`border border-indigo-200 rounded-sm flex justify-center items-center cursor-pointer  hover:border-purple-500 ${
                hat === activeHat && "border-2 border-purple-700"
              }`}
              onClick={() => setActiveHat(hat)}
            >
              <Hat type={hat} small />
            </div>
          ))}
        </div>
        <p className="text-sm">
          A covering for the head usually having a shaped crown and brim.
        </p>
        <button
          className="rounded-sm bg-pink-600 text-white text-sm py-1 px-2"
          onClick={onAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer
      className="p-2 text-xs flex justify-around items-center bg-gray-900 text-white"
      id="Footer"
    >
      <div>© 202456 Domo's Hat Shop</div>
    </footer>
  );
}

function DomoHatShop() {
  const [countInCart, setCountInCart] = useState(0);
  return (
    <div className="bg-white top-0 sticky min-h-screen">
      <Header countInCart={countInCart} />
      <Main onAddToCart={() => setCountInCart((c) => c + 1)} />
      <Footer />
    </div>
  );
}

const App = () => {
  return <DomoHatShop />;
};

export default App;
