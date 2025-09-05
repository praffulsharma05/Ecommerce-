// import React, { useState } from 'react'
// import {assets} from '../admin_assets/assets'
// import axios from 'axios'
// import {backendUrl } from '../App'
// import { toast } from 'react-toastify'
// const Add = ({token}) => {

//     const [image1,setImage1] = useState(false)
//     const [image2,setImage2] = useState(false)
//     const [image3,setImage3] = useState(false)
//     const [image4,setImage4] = useState(false)

//     const [name,setName] = useState("")
//     const [description, setDescription] = useState("")
//     const [price , setPrice] = useState("")

//     const [category, setCategory] = ("Men")
//     const [subCategory, setSubCategory] = useState("Topwear")
//     const [bestseller, setBestseller] = useState(false)
//     const [sizes, setSizes] = useState([])

//     const onSubmitHandler = async (e) => {
//       e.preventDefault();
//       try{
//         const formData = new FormData()
//         formData.append("name",name)
//         formData.append("description", description)
//         formData.append("price", price)
//         formData.append("category", category)
//         formData.append("subCategory",subCategory)
//         formData.append("bestseller",bestseller)
//         formData.append("sizes",JSON.stringify(sizes))

//     image1 && formData.append("image1",image1)
//     image2 && formData.append("image2",image2)
//     image3 && formData.append("image3",image3)
//     image4 && formData.append("image4",image4)

//     const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}} )
//     if(response.data.success){
//       toast.success(response.data.message)
//       setName('')
//       setDescription('')
//       setImage1(false)
//       setImage2(false)
//       setImage3(false)
//       setImage4(false)
//       setPrice('')
//         }else{
//           toast.error(response.data.message)
//         }
//       }catch(error){
//           console.log(error);
//           toast.error(error.message)
//       }
//     }
//   return (
//      <form onSubmit={onSubmitHandler} className='flex ml-20 flex-col w-full items-start gap-3'>
//       <div>
//         <p className='flex gap-2 font-bold'>Upload images</p>
//         <div className='flex gap-2 ' >
//           <label   htmlFor='image1'>
//             <img className=' w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//             <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id='image1' hidden />
//           </label>
//            <label htmlFor='image2'>
//             <img className='w-20'src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}  alt="" />
//             <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id='image2' hidden />
//           </label>
//           <label htmlFor='image3'>
//             <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}  alt="" />
//             <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id='image3' hidden />
//           </label>
//            <label htmlFor='image4'>
//             <img className='w-20'src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}  alt="" />
//             <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
//           </label>
//         </div>
//       </div>
//       <div className='w-full '>
//         <p className='font-bold mb-2'>Product name </p>
//         <input onChange={(e)=> setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
//       </div>
//       <div className='w-full '>
//         <p className='font-bold mb-2'>Product description</p>
//         <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
//       </div>

//       <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//         <div className=''>
//           <p className='mb-2'>Product category</p>
//           <select onChange={(e)=> setCategory(e.target.value)}   className='w-full px-3 py-2 '>
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Kids">Kids</option>
//           </select>
//         </div>
//         <div className=''>
//           <p className='mb-2'>Sub category</p>
//           <select onChange={(e)=> setSubCategory(e.target.value)}  className='w-full px-3 py-2 ' >
//             <option value="Topwear">Topwear</option>
//             <option value="Bottomwear">Bottomwear</option>
//             <option value="Winterwear">Winterwear</option>
//           </select>
//         </div>

//         <div className=''>
//         <p className='mb-2'>Product Price</p>
//         <input onChange={(e)=> setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] ' type="Number" placeholder='25' />
//         </div>
//       </div>
//       <div >
//         <p className='mb-2'>Product Sizes</p>
//         <div className='flex gap-3 '>
//           <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>
//             <p  className={`${sizes.includes('S') ? 'bg-pink-100':'bg-slate-100'} px-3 py-1 cursor-pointer`}>S</p>
//           </div>
//            <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
//             <p  className={`${sizes.includes('M') ? 'bg-pink-100':'bg-slate-100'} px-3 py-1 cursor-pointer`}  >M</p>
//           </div>
//            <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
//             <p className={`${sizes.includes('L') ? 'bg-pink-100':'bg-slate-100'} px-3 py-1 cursor-pointer`}>L</p>
//           </div>
//            <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
//             <p className={`${sizes.includes('XL') ? 'bg-pink-100':'bg-slate-100'} px-3 py-1 cursor-pointer`}>XL</p>
//           </div>
//            <div onClick={()=> setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
//             <p className={`${sizes.includes('XXL') ? 'bg-pink-100':'bg-slate-100'} px-3 py-1 cursor-pointer`} >XXL</p>
//           </div>
//         </div>
//       </div>
//       <div className='flex gap-2 mt-2 '>
//         <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller'/>
//         <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//       </div>

//       <button type='submit' className=' cursor-pointer w-28 py-3 mt-4 bg-black text-white'>ADD</button>
//      </form>
//   )
// }

// export default Add

import React, { useState } from "react";
import { assets } from "../admin_assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1512436991641-6745cdb1723f")',
      }}
    >
      <form
        onSubmit={onSubmitHandler}
        className="backdrop-blur-md bg-white/80 p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-4xl mx-auto flex flex-col gap-5"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Add New Product
        </h2>

        <div>
          <p className="font-semibold mb-2">Upload images</p>
          <div className="flex gap-3 flex-wrap">
            {[image1, image2, image3, image4].map((img, idx) => (
              <label
                key={idx}
                htmlFor={`image${idx + 1}`}
                className="cursor-pointer"
              >
                <img
                  className="w-20 h-20 object-cover rounded shadow-md hover:scale-105 transition"
                  src={!img ? assets.upload_area : URL.createObjectURL(img)}
                  alt={`upload-${idx}`}
                />
                <input
                  hidden
                  type="file"
                  id={`image${idx + 1}`}
                  onChange={(e) => {
                    const setter = [setImage1, setImage2, setImage3, setImage4][
                      idx
                    ];
                    setter(e.target.files[0]);
                  }}
                />
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Product Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Type here"
            required
            className="w-full max-w-md px-4 py-2 rounded-md border shadow-sm focus:ring focus:outline-none"
          />
        </div>

        <div>
          <p className="font-semibold mb-2">Product Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write content here"
            required
            className="w-full max-w-md px-4 py-2 rounded-md border shadow-sm focus:ring focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div>
            <p className="font-semibold mb-2">Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-md border shadow-sm"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <p className="font-semibold mb-2">Subcategory</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="px-4 py-2 rounded-md border shadow-sm"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <p className="font-semibold mb-2">Price (₹)</p>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-4 py-2 rounded-md border shadow-sm"
              placeholder="25"
            />
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Select Sizes</p>
          <div className="flex gap-3 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((s) => s !== size)
                      : [...prev, size]
                  )
                }
              >
                <p
                  className={`px-3 py-1 rounded-full shadow cursor-pointer ${
                    sizes.includes(size)
                      ? "bg-pink-200 text-black"
                      : "bg-slate-200"
                  }`}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
            id="bestseller"
          />
          <label
            htmlFor="bestseller"
            className="cursor-pointer font-medium text-sm"
          >
            Add to Bestseller
          </label>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
