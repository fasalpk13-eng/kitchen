// import React, { useState } from "react";

// import noodles from "../assets/foodimg/noodles.svg";
// import friedrice from "../assets/foodimg/friedrice.svg";
// import instantnoodles from "../assets/foodimg/instantnoodles.svg";
// import spinach from "../assets/foodimg/spinach.svg";
// import omleterice from "../assets/foodimg/omleterice.svg";
// import specialomlete from "../assets/foodimg/specialomlete.svg";
// import seafoodnoodles from "../assets/foodimg/seafoodnoodles.svg";
// import saltedpasta from "../assets/foodimg/saltedpasta.svg";
// import beef from "../assets/foodimg/beef.svg";
// import { FaSearch } from "react-icons/fa";

// function Home() {
//   const [selectedSize, setSelectedSize] = useState({});

//   const dishes = [
//     {
//       id: 1,
//       name: "Healthy noodle  with spinach leaf",
//       img: noodles,
//       price: "3.29 AED",
//       bowls: 22,
//     },
//     {
//       id: 2,
//       name: "Hot spicy fried rice with omelet",
//       img: friedrice,
//       price: "3.29 AED",
//       bowls: 13,
//     },
//     {
//       id: 3,
//       name: "Spicy noodle with special omelette",
//       img: instantnoodles,
//       price: "3.29 AED",
//       bowls: 17,
//     },
//     {
//       id: 4,
//       name: "Healthy noodle with spinach leaf",
//       img: spinach,
//       price: "25.00 AED",
//       bowls: 22,
//     },
//     {
//       id: 5,
//       name: "Hot spicy fried rice with omelet",
//       img: omleterice,
//       price: "25.00 AED",
//       bowls: 13,
//     },
//     {
//       id: 6,
//       name: "Spicy noodle with special omelette",
//       img: specialomlete,
//       price: "25.00 AED",
//       bowls: 17,
//     },
//     {
//       id: 7,
//       name: "Spicy seasoned seafood noodles",
//       img: seafoodnoodles,
//       price: "25.00 AED",
//       bowls: 20,
//     },
//     {
//       id: 8,
//       name: "Salted pasta with mushroom sauece",
//       img: saltedpasta,
//       price: "25.00 AED",
//       bowls: 11,
//     },
//     {
//       id: 9,
//       name: "beef dumbling in hot and sour soup",
//       img: beef,
//       price: "25.00 AED",
//       bowls: 16,
//     },
//   ];

//   const handleSizeChange = (id, size) => {
//     setSelectedSize((prev) => ({
//       ...prev,
//       [id]: size,
//     }));
//   };

//   return (
//     <div className="min-h-full bg-[#1f2433] text-white  p-4 sm:p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">Chef Kitchen</h1>
//           <p className="text-gray-400 text-sm">Tuesday, 2 March 2024</p>
//         </div>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search for food, coffee, etc."
//             className="w-72 rounded-xl bg-[#2a2f42] border border-[#343a52] pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:outline-none"
//           />

//           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//             <FaSearch />
//           </span>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-6 mt-8 border-b border-[#2f354a]">
//         <button className="pb-3 text-orange-400 border-b-2 border-orange-400">
//           Today Special
//         </button>
//         <button className="pb-3 text-gray-400">Our Specials</button>
//         <button className="pb-3 text-gray-400">South Indian Special</button>
//       </div>

//       {/* Choose dishes + Dine In */}
//       <div className="flex items-center justify-between mt-8">
//         <h2 className="text-xl font-semibold">Choose Dishes</h2>

//         <button className="flex items-center gap-2 bg-[#2a2f42] border border-[#343a52] px-4 py-2 rounded-xl text-sm text-gray-300 hover:bg-[#323854] transition">
//           Dine In
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Dishes Grid */}
//       <div className="grid grid-cols-3  sm:gap-6 mt-15 ">
//         <div className="grid grid-cols-3 gap-4 sm:gap-16 col-span-3">
//           {dishes.map((item) => (
//             <div
//               key={item.id}
//               className="bg-[#2a2f42] rounded-2xl p-3 sm:p-4 text-center"
//             >
//               {/* Image */}
//               <div className=" flex items-center justify-center mx-auto ">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className={`transition-all duration-300 ease-out object-contain -mt-10
//     ${
//       selectedSize[item.id] === "S"
//         ? "w-25 h-25 scale-95"
//         : selectedSize[item.id] === "L"
//         ? "w-25 h-25 scale-105"
//         : "w-25 h-25 scale-100"
//     }`}
//                 />
//               </div>

//               {/* Details */}
//               <h3 className="mt-4  font-medium text-sm sm:text-base">
//                 {item.name}
//               </h3>
//               <p className="text-green-400 mt-2 text-sm">{item.price}</p>
//               <p className="text-gray-400 text-xs sm:text-sm">
//                 {item.bowls} Bowls available
//               </p>

//               {/* Size Selector */}
//               <div className="flex gap-2 mt-4 justify-center items-center">
//                 {["S", "M", "L"].map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => handleSizeChange(item.id, size)}
//                     className={`px-3 py-1 rounded-lg border text-xs sm:text-sm transition-all ${
//                       selectedSize[item.id] === size
//                         ? "bg-orange-500 border-orange-500"
//                         : "border-[#3a405a]"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//               {/* add button  */}
//               <div className="flex mt-4 items-center justify-center ">
//                 <button className="flex flex-col bg-orange-500 px-6 py-2 rounded-xl">
//                   Add
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;






import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import noodles from "../assets/foodimg/noodles.svg";
import friedrice from "../assets/foodimg/friedrice.svg";
import instantnoodles from "../assets/foodimg/instantnoodles.svg";
import spinach from "../assets/foodimg/spinach.svg";
import omleterice from "../assets/foodimg/omleterice.svg";
import specialomlete from "../assets/foodimg/specialomlete.svg";
import seafoodnoodles from "../assets/foodimg/seafoodnoodles.svg";
import saltedpasta from "../assets/foodimg/saltedpasta.svg";
import beef from "../assets/foodimg/beef.svg";

function Home({ addOrder }) {
  const [selectedSize, setSelectedSize] = useState({});
  const [activeTab, setActiveTab] = useState(1);
  const [search, setSearch] = useState("");

  const [orderType, setOrderType] = useState("Dine In");
  const [openType, setOpenType] = useState(false);

  const tabs = [
    { id: 1, name: "Today Special" },
    { id: 2, name: "Our Specials" },
    { id: 3, name: "South Indian Special" },
  ];

  const dishes = [
    {
      id: 1,
      name: "Healthy noodle with spinach leaf",
      img: noodles,
      price: "25.00 AED",
      bowls: 22,
    },
    {
      id: 2,
      name: "Hot spicy fried rice with omelet",
      img: friedrice,
      price: "25.00 AED",
      bowls: 13,
    },
    {
      id: 3,
      name: "Spicy noodle with special omelet",
      img: instantnoodles,
      price: "25.00 AED",
      bowls: 17,
    },
    {
      id: 4,
      name: "Healthy noodle with spinach leaf",
      img: spinach,
      price: "25.00 AED",
      bowls: 22,
    },
    {
      id: 5,
      name: "Hot spicy fried rice with omelet",
      img: omleterice,
      price: "25.00 AED",
      bowls: 13,
    },
    {
      id: 6,
      name: "Spicy noodle with special omelet",
      img: specialomlete,
      price: "25.00 AED",
      bowls: 17,
    },
    {
      id: 7,
      name: "Spicy seasoned seafood noodles",
      img: seafoodnoodles,
      price: "25.00 AED",
      bowls: 20,
    },
    {
      id: 8,
      name: "Salted pasta with mushroom sauce",
      img: saltedpasta,
      price: "25.00 AED",
      bowls: 11,
    },
    {
      id: 9,
      name: "Beef dumbling in hot and sour soup",
      img: beef,
      price: "25.00 AED",
      bowls: 16,
    },
  ];

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSizeChange = (id, size) => {
    setSelectedSize((prev) => ({
      ...prev,
      [id]: size,
    }));
  };

  return (
    /*  MAIN CONTAINER — full height + column layout */
    <div className="h-screen bg-[#1f2433] text-white p-4 sm:p-6 flex flex-col">
      
      {/* HEADER */}
      <div className="flex items-center justify-between  lg:mr-20
 mt-2">
        <div>
          <h1 className="text-2xl font-bold">Chef Kitchen</h1>
          <p className="text-gray-400 text-sm">Tuesday, 2 March 2024</p>
        </div>

        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for food..."
            className="w-60 rounded-xl bg-[#2a2f42] border border-[#343a52] pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:outline-none"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-8 border-b mt-5 border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative pb-2"
          >
            <span
              className={`text-base font-medium transition-colors duration-300 ${
                activeTab === tab.id ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {tab.name}
            </span>

            {activeTab === tab.id && (
              <span className="absolute left-0 -bottom-0.5 w-full h-[3px] bg-orange-500 rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* CHOOSE DISHES + ORDER TYPE */}
      <div className="flex justify-between mt-6">
        <h2 className="text-xl font-semibold">Choose Dishes</h2>

        <div className="relative">
          <button
            onClick={() => setOpenType(!openType)}
            className="flex items-center justify-between gap-2 bg-[#2a2f42] border border-[#343a52] px-6 py-2 rounded-xl text-sm text-gray-300 min-w-[140px]"
          >
            {orderType}
            <span>▾</span>
          </button>

          {openType && (
            <div className="absolute right-0 mt-2 w-full bg-[#2a2f42] border border-[#343a52] rounded-xl overflow-hidden z-20">
              {["Dine In", "Take Away", "Delivery"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setOrderType(type);
                    setOpenType(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#323854]"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*SCROLL ONLY DISHES */}
      
        <div className="grid grid-cols-2 mt-6 lg:grid-cols-3 gap-4 sm:gap-16">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((item) => (
              <div
                key={item.id}
                className="bg-[#2a2f42] rounded-2xl p-4 text-center"
              >
                <div className="flex justify-center -mt-10">
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`transition-all duration-300 object-contain
                      ${
                        selectedSize[item.id] === "S"
                          ? "w-24 h-24 scale-95"
                          : selectedSize[item.id] === "L"
                          ? "w-24 h-24 scale-105"
                          : "w-24 h-24"
                      }`}
                  />
                </div>

                <h3 className="mt-4 text-sm font-medium">{item.name}</h3>
                <p className="text-green-400 mt-2 text-sm">{item.price}</p>
                <p className="text-gray-400 text-xs">
                  {item.bowls} Bowls available
                </p>

                <div className="flex gap-2 mt-4 justify-center">
                  {["S", "M", "L"].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(item.id, size)}
                      className={`px-3 py-1 rounded-lg border ${
                        selectedSize[item.id] === size
                          ? "bg-orange-500 border-orange-500"
                          : "border-[#3a405a]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    addOrder({
                      id: item.id,
                      name: item.name,
                      img: item.img,
                      price: parseFloat(item.price),
                    })
                  }
                  className="mt-4 bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-xl transition active:scale-95 active:shadow-inner"
                >
                  Add
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-400">
              No dishes found
            </div>
          )}
        </div>
      </div>
    
  );
}

export default Home;
