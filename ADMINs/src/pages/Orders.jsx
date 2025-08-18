import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../admin_assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async(event, orderId)=> {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:event.target.value}, {headers:{token}})
      if(response.data.success){
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
      toast.error( response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div  className="ml-7">
      <h3 >Order Page</h3>
      <div >
        {orders.map((order, index) => (
          <div className=" grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" key={index}>
            <img className="w-12" src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-bold ">{order.address.firstName + " " + order.address.lastName}</p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    "," +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">Items : {order.items.length}</p>
              <p className="mt-3">Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[20px]">{currency}{order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orders;

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";
// import { assets } from "../admin_assets/assets";

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     if (!token) return;
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/list",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setOrders(response.data.orders);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div className="p-4 sm:p-6 md:p-10">
//       <h3 className="text-2xl font-semibold mb-6 text-gray-800">All Orders</h3>
//       <div className="space-y-6">
//         {orders.map((order, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-1 sm:grid-cols-[auto_2fr_1fr] lg:grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 bg-white p-6 rounded-2xl shadow-md border border-gray-200"
//           >
//             <img className="w-14 h-14 object-contain" src={assets.parcel_icon} alt="Parcel Icon" />

//             {/* Order Details */}
//             <div className="space-y-1 text-sm text-gray-700">
//               <div className="font-medium text-gray-900">
//                 {order.items.map((item, i) => (
//                   <p key={i}>
//                     {item.name} × {item.quantity} <span className="text-xs text-gray-500">({item.size})</span>
//                   </p>
//                 ))}
//               </div>
//               <p className="mt-1 font-semibold">{order.address.firstName} {order.address.lastName}</p>
//               <p>{order.address.street},</p>
//               <p>
//                 {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}
//               </p>
//               <p className="text-blue-700 font-medium">📞 {order.address.phone}</p>
//             </div>

//             {/* Order Summary */}
//             <div className="space-y-1 text-sm text-gray-700">
//               <p>🛍️ Items: <span className="font-semibold">{order.items.length}</span></p>
//               <p>💳 Method: {order.paymentMethod}</p>
//               <p>💰 Payment: <span className={order.payment ? "text-green-600" : "text-red-500"}>{order.payment ? "Done" : "Pending"}</span></p>
//               <p>📅 Date: {new Date(order.date).toLocaleDateString()}</p>
//             </div>

//             {/* Order Amount */}
//             <div className="text-lg font-bold text-green-700 flex items-center justify-start lg:justify-center">
//               {currency}{order.amount}
//             </div>

//             {/* Order Status Dropdown */}
//             <div className="flex items-center">
//               <select
//                 className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 defaultValue={order.status || "Order Placed"}
//               >
//                 <option value="Order Placed">Order Placed</option>
//                 <option value="Packing">Packing</option>
//                 <option value="Shipped">Shipped</option>
//                 <option value="Out for delivery">Out for delivery</option>
//                 <option value="Delivered">Delivered</option>
//               </select>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;
