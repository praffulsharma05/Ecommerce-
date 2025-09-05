import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND;

export const currency = "$";
const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full ">
            <Sidebar />

            <div className="w-[70%] max-auto ml-[max(5vw , 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { Routes, Route } from "react-router-dom";
// import Add from "./pages/Add";
// import List from "./pages/List";
// import Orders from "./pages/Orders";
// import Login from "./components/Login";
// import { ToastContainer } from "react-toastify";

// export const backendUrl = import.meta.env.VITE_BACKEND_URL;
// export const currency = "$";

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   useEffect(() => {
//     localStorage.setItem("token", token);
//   }, [token]);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1615937076598-b9f0b25e1688?auto=format&fit=crop&w=600&q=80')`,
//         backgroundSize: "600px 600px", // square size
//       }}
//     >
//       <ToastContainer />
//       {token === "" ? (
//         <Login setToken={setToken} />
//       ) : (
//         <>
//           <Navbar setToken={setToken} />
//           <hr className="border-gray-300" />
//           <div className="flex w-full">
//             <Sidebar />

//             <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-700 text-base transition-transform hover:scale-[1.01] duration-300">
//               <Routes>
//                 <Route path="/add" element={<Add token={token} />} />
//                 <Route path="/list" element={<List token={token} />} />
//                 <Route path="/order" element={<Orders token={token} />} />
//               </Routes>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
