import {
  MapPin,
  Sparkle,
  ShoppingCart,
  Check,
  ChevronDown,
} from "lucide-react";
import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div>
      <div>
        <div className="w-auto gap-8 h-[70px] bg-[#FAFAFA] border-l border-r border-b border-solid border-[#53535377] rounded-bl-lg rounded-br-lg flex items-center justify-between">
          <div className="flex items-center gap-2 px-4 py-5">
            <Sparkle />
            <p className="text-black text-sm font-bold">
              Get 5% Off your first order,
              <span className="text-[#FC8A06] font-bold underline cursor-pointer">
                Promo: ORDER5
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-5">
            <MapPin />
            <p className="text-black text-sm font-bold flex items-center gap-2">
              Regent Street, A4, A4201, London{" "}
              <span className="text-[#FC8A06] font-bold cursor-pointer">
                Change Location
              </span>
            </p>
          </div>
          <div className="h-full flex items-center px-4 bg-[#028643] rounded-bl-lg rounded-br-lg">
            <div className="relative pr-4 border-r border-white/30">
              <ShoppingCart className="w-6 h-6 text-white" />
              <Check className="w-3 h-3 text-white absolute -bottom-1 -right-1 bg-[#1A5632] rounded-full" />
            </div>
            <p className="text-white text-sm font-bold px-4 border-r border-white/30">
              23 Items
            </p>
            <p className="text-white text-sm font-bold px-4 border-r border-white/30">
              GBP 79.89
            </p>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer ml-4">
              <ChevronDown className="w-4 h-4 text-[#1A5632]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
