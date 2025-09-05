// import React from 'react'
// import {NavLink} from 'react-router-dom'
//  import { assets } from '../admin_assets/assets'
// const Sidebar = () => {
//   return (
//     <div className='w-[18%] min-h-screen border-r-2'>
//    <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

//       <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
//           <img className='w-5 h-5' src={assets.add_icon} alt="" />
//           <p className='hidden md:block'>Add Items</p>
//       </NavLink>
//       <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
//           <img className='w-5 h-5' src={assets.order_icon} alt="" />
//           <p className='hidden md:block'>List Items</p>
//       </NavLink>
//       <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/order">
//           <img className='w-5 h-5' src={assets.order_icon} alt="" />
//           <p className='hidden md:block'>Order</p>
//       </NavLink>
//    </div>
//     </div>
//   )
// }

// export default Sidebar

import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../admin_assets/assets";

const Sidebar = () => {
  const navLinkStyle =
    "flex items-center gap-3 px-4 py-2 rounded-l-lg border border-gray-200 shadow-md bg-white hover:bg-gray-100 transform hover:translate-x-1 transition-all duration-300";

  return (
    <div className="w-[23%] min-h-screen border-r bg-gradient-to-b from-gray-100 to-gray-300 shadow-[inset_0_0_8px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-4 pt-10 pl-[15%] text-[15px] font-medium text-gray-700">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${navLinkStyle} ${
              isActive
                ? "bg-blue-100 text-blue-600 shadow-[4px_4px_15px_rgba(0,0,0,0.1)]"
                : ""
            }`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Icon" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${navLinkStyle} ${
              isActive
                ? "bg-blue-100 text-blue-600 shadow-[4px_4px_15px_rgba(0,0,0,0.1)]"
                : ""
            }`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List Icon" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) =>
            `${navLinkStyle} ${
              isActive
                ? "bg-blue-100 text-blue-600 shadow-[4px_4px_15px_rgba(0,0,0,0.1)]"
                : ""
            }`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Order Icon" />
          <p className="hidden md:block">Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
