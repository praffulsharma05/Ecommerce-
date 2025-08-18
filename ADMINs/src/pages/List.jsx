// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {backendUrl, currency} from '../App'
// import { toast } from 'react-toastify'
// const List = ({token}) => {

//   const [list , setList] = useState([])
//   const fetchList = async ()=>{
//       try {
//     const response =await axios.get(backendUrl + '/api/product/list')
//        if(response.data.success){
//        setList(response.data.products);
//        }else{
//      toast.error(response.data.message);
//        }
//        }catch (error) {
//         console.log(error);
//         toast.error(error.message)

//       }
//   }

//   const removeProduct = async (id) => {
//     try {
//       const response = await axios.post(backendUrl + '/api/product/remove',{id}, {headers:{token}})
//       if(response.data.success){
//         toast.success(response.data.message)
//         await fetchList();
//        }else{
//         toast.error(response.data.message)
//         }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);

//     }
//   }

//   useEffect(()=>{
//       fetchList()
//   },[])
//   return (
//     <>
//     <p className='ml-8 mb-2'>All Product List</p>
//     <div className='flex flex-col ml-8 gap-2 '>
//         {/* --------------List Of Table */}

//        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] w-full items-center py-1 px-2 border bg-gray-100 text-sm'>
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b className='text-center'>Action</b>
//         </div>

//         {/* -------------------Product List---------------- */}

//         {
//           list.map((item, index)=> (
//             <div className='grid md:grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr]   items-center gap-2 py-1 px-2 border text-sm' key={index}>
//               <img className='w-12' src={item.image[0]} alt="" />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>{currency}{item.price}</p>
//               <p onClick={()=> removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
//             </div>
//           ))
//         }
//     </div>
//     </>

//   )
// }

// export default List

import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div
      className="min-h-screen p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1602524207343-0c2f1a7c1b20?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <p className="ml-8 mb-4 text-white text-xl font-semibold">
        All Product List
      </p>

      <div className="flex flex-col ml-8 gap-4">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] w-full items-center py-2 px-4 border border-gray-300 bg-white/70 text-sm rounded-lg shadow-md backdrop-blur-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product Items */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 py-2 px-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <img
              className="w-12 rounded-md border border-gray-300"
              src={item.image[0]}
              alt="Product"
            />
            <p className="font-medium text-gray-800">{item.name}</p>
            <p className="text-gray-600">{item.category}</p>
            <p className="font-semibold text-green-700">
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-center text-red-500 hover:text-red-700 font-bold cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
