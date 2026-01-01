import React from "react";
import logo from "../assets/LOGO.svg";
import storeImage from "../assets/Group.png";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="bg-[#D9D9D9]">
        <div className="w-full max-w-1200px mx-auto">
          <img src={logo} alt="logo" className="w-40" />
          <br />
          <img src={storeImage} alt="storeImage" className="w-40" />
          <p>
            Company # 490039-445, Registered with
            <br />
            House of companies.
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
}
