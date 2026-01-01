import { MapPin, Sparkle } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div>
      <div>
        <div className="w-auto h-[70px] bg-[#FAFAFA] border-l border-r border-b border-solid border-[#53535377] rounded-bl-lg rounded-br-lg flex items-center justify-between">
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
          <div></div>
        </div>
      </div>
      <div>nav</div>
    </div>
  );
}
