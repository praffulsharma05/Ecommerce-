// import React from "react";
// import { assets } from "../admin_assets/assets";
// const Navbar = ({ setToken }) => {
//   return (
//     <div className="flex items-center py-2 px-[4%] justify-between">
//       <img className="w-[max(8%,80px)]" src={assets.prafful} alt="" />
//       <button
//         onClick={() => setToken("")}
//         className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { assets } from "../admin_assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between px-[4%] py-3 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <img
        className="w-[max(8%,80px)] h-auto object-contain"
        src={assets.p1}
        alt="Logo"
      />
      {/* Logout Button */}
      <button
        onClick={() => setToken("")}
        className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm shadow-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
