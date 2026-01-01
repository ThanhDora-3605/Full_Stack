import React, { useState } from "react";
import { Button } from "../Components/UI/button";
import bgImage from "../assets/image 1.png";
import avatarImage from "../assets/Untitled-2 1.png";
import pizzaImage from "../assets/Untitled-1 1.png";
import reviewImage from "../assets/Group 3.png";
import reviewImage2 from "../assets/Group 4.png";
import reviewImage3 from "../assets/Group 2.png";
import productImage from "../assets/Group 10.png";
import productImage2 from "../assets/Group 11.png";
import productImage3 from "../assets/Group 12.png";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Pizza & Fast food");
  return (
    <div className="w-[1160px] mx-auto">
      <div className="w-full h-[500px] relative flex items-center rounded-3xl bg-white p-6 border border-gray-300">
        <div className="w-full max-w-2xl px-10 z-10">
          <p className="text-sm text-gray-500 mb-4">
            Order Restaurant food, takeaway and groceries.
          </p>
          <h1 className="text-4xl font-bold mb-4">
            Feast Your Senses,
            <br />
            <span className="text-[#FC8A06] font-bold text-4xl">
              Fast and Fresh
            </span>
          </h1>
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-4">
              Enter a postcode to see what we deliver
            </p>
            <div className="flex w-fit items-center">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="rounded-l-3xl rounded-r-none border border-gray-300 w-[180px] px-6 py-2 text-xs z-10 focus:outline-none focus:ring-0"
              />
              <Button className="bg-[#FC8A06] text-white hover:bg-[#FC8A06]/90 rounded-r-3xl rounded-2xl px-8 py-4 text-xs font-semibold -ml-4 z-20">
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 h-[450px]">
          <img
            src={bgImage}
            alt="bgImage"
            className="w-full h-full object-cover"
          />
          <img
            src={avatarImage}
            alt="avatarImage"
            className="w-90 h-90 rounded-xl object-cover absolute bottom-0 right-[170px]"
          />
          <img
            src={pizzaImage}
            alt="pizzaImage"
            className="w-100 h-100 rounded-xl object-cover absolute bottom-0 right-[240px] -translate-x-1/2"
          />
          <img
            src={reviewImage}
            alt="reviewImage"
            className="w-90 h-40 object-cover absolute bottom-[300px] left-[240px] -translate-x-1/2"
          />
          <img
            src={reviewImage2}
            alt="reviewImage2"
            className="w-90 h-40 object-cover absolute bottom-[160px] left-[320px] -translate-x-1/2"
          />
          <img
            src={reviewImage3}
            alt="reviewImage3"
            className="w-90 h-40 object-cover absolute bottom-0 left-[280px] -translate-x-1/2"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="w-full bg-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Up to -40% 🎊 Order.uk exclusive deals
          </h2>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSelectedCategory("Vegan")}
              className={`transition-colors ${
                selectedCategory === "Vegan"
                  ? "text-[#FC8A06] border border-[#FC8A06] rounded-lg px-4 py-2 font-medium"
                  : "text-gray-700 hover:text-[#FC8A06]"
              }`}
            >
              Vegan
            </button>
            <button
              onClick={() => setSelectedCategory("Sushi")}
              className={`transition-colors ${
                selectedCategory === "Sushi"
                  ? "text-[#FC8A06] border border-[#FC8A06] rounded-lg px-4 py-2 font-medium"
                  : "text-gray-700 hover:text-[#FC8A06]"
              }`}
            >
              Sushi
            </button>
            <button
              onClick={() => setSelectedCategory("Pizza & Fast food")}
              className={`transition-colors ${
                selectedCategory === "Pizza & Fast food"
                  ? "text-[#FC8A06] border border-[#FC8A06] rounded-lg px-4 py-2 font-medium"
                  : "text-gray-700 hover:text-[#FC8A06]"
              }`}
            >
              Pizza & Fast food
            </button>
            <button
              onClick={() => setSelectedCategory("others")}
              className={`transition-colors ${
                selectedCategory === "others"
                  ? "text-[#FC8A06] border border-[#FC8A06] rounded-lg px-4 py-2 font-medium"
                  : "text-gray-700 hover:text-[#FC8A06]"
              }`}
            >
              others
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <img
            src={productImage}
            alt="productImage"
            className="w-[32%] object-cover"
          />
          <img
            src={productImage2}
            alt="productImage2"
            className="w-[32%] object-cover"
          />
          <img
            src={productImage3}
            alt="productImage3"
            className="w-[32%] object-cover"
          />
        </div>

        <div className="w-full bg-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Order.uk Popular Categories 🤩</h2>
        </div>
      </div>
    </div>
  );
}
