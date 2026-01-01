import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DialogLogin } from "./UI/dialog";
import logo from "../assets/LOGO.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-[70px] items-center justify-between bg-white rounded-lg">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="logo" className="w-40" />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              to="/"
              className="bg-[#FC8A06] text-white px-4 py-2 rounded-3xl font-medium hover:bg-[#FC8A06]/90"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/browse-menu"
              className="text-[#1A1A1A] hover:text-[#FC8A06] transition-colors rounded-3xl px-4 py-2"
            >
              Browse Menu
            </Link>
          </li>
          <li>
            <Link
              to="/special-offers"
              className="text-[#1A1A1A] hover:text-[#FC8A06] transition-colors rounded-3xl px-4 py-2"
            >
              Special Offers
            </Link>
          </li>
          <li>
            <Link
              to="/restaurants"
              className="text-[#1A1A1A] hover:text-[#FC8A06] transition-colors rounded-3xl px-4 py-2"
            >
              Restaurants
            </Link>
          </li>
          <li>
            <Link
              to="/track-order"
              className="text-[#1A1A1A] hover:text-[#FC8A06] transition-colors rounded-3xl px-4 py-2"
            >
              Track Order
            </Link>
          </li>
        </ul>
        <DialogLogin open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
