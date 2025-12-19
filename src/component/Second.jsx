

// import { useState } from "react";

// import noodles from "../assets/foodimg/noodles.svg";
// import friedrice from "../assets/foodimg/friedrice.svg";
// import instantnoodles from "../assets/foodimg/instantnoodles.svg";
// import spinach from "../assets/foodimg/spinach.svg";
// import omleterice from "../assets/foodimg/omleterice.svg";
// import specialomlete from "../assets/foodimg/specialomlete.svg";
// import seafoodnoodles from "../assets/foodimg/seafoodnoodles.svg";
// import saltedpasta from "../assets/foodimg/saltedpasta.svg";
// import beef from "../assets/foodimg/beef.svg";
// import deleteicon from "../assets/delete.svg";

// function Second() {
//   const [orders, setOrders] = useState([
//     {
//       id: 1,
//       name: "Healthy noodle with spinach leaf",
//       img: noodles,
//       price: 3.29,
//       qty: 1,
//       note: "",
//     },
//     {
//       id: 2,
//       name: "Hot spicy fried rice with omelet",
//       img: friedrice,
//       price: 3.29,
//       qty: 2,
//       note: "Please, just a little bit spicy only.",
//     },
//     {
//       id: 3,
//       name: "Spicy instant noodle with special omelette",
//       img: instantnoodles,
//       price: 3.29,
//       qty: 1,
//       note: "",
//     },
//     {
//       id: 4,
//       name: "Healthy noodle with spinach leaf",
//       img: spinach,
//       price: 25.0,
//       qty: 1,
//       note: "",
//     },
//     {
//       id: 5,
//       name: "Hot spicy fried rice with omelet",
//       img: omleterice,
//       price: 25.0,
//       qty: 1,
//       note: "",
//     },
//     {
//       id: 6,
//       name: "Spicy instant noodle with special omelette",
//       img: specialomlete,
//       price: 25.0,
//       qty: 3,
//       note: "",
//     },
//     {
//       id: 7,
//       name: "Seafood noodle with salt pasta",
//       img: seafoodnoodles,
//       price: 15.0,
//       qty: 1,
//       note: "",
//     },
//     {
//       id: 8,
//       name: "Salted pasta with spicy tomato",
//       img: saltedpasta,
//       price: 15.0,
//       qty: 1,
//       note: "",
//     },
//     {
//       id: 9,
//       name: "Beef steak with vegetables",
//       img: beef,
//       price: 30.0,
//       qty: 1,
//       note: "",
//     },
//   ]);

//   const subtotal = orders.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   return (
//     <div className="w-full max-w-sm h-screen md:grid-block bg-[#1f1d2b] rounded-2xl p-4 text-white flex flex-col">
      
//       <h2 className="text-lg font-semibold mb-4">
//         Orders #34562
//       </h2>

//       <div className="flex gap-2 mb-4">
//         <button className="px-4 py-1 rounded-lg bg-orange-500 text-sm">
//           Dine In
//         </button>
//         <button className="px-4 py-1 rounded-lg border border-gray-600 text-sm text-orange-400">
//           Take away
//         </button>
//         <button className="px-4 py-1 rounded-lg border border-gray-600 text-sm text-orange-400">
//           Delivery
//         </button>
//       </div>

//       <div className="flex justify-between text-sm text-gray-400 pb-2 border-b border-[#393C49] mb-4">
//         <span>Item</span>
//         <span className="ml-36">Qty</span>
//         <span>Price</span>
//       </div>

//       <div className="flex-1 overflow-y-auto hide-scrollbar pr-1 space-y-4 scroll-smooth">
//         {orders.map((item) => (
//           <div key={item.id} className="pb-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="h-10 w-10 rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm font-medium truncate w-32">
//                     {item.name}
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     ${item.price.toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-[#2d303e] px-3 py-1 rounded-lg text-center min-w-8">
//                 {item.qty}
//               </div>

//               <p className="text-sm">
//                 ${(item.price * item.qty).toFixed(2)}
//               </p>
//             </div>

//             <div className="flex items-center gap-2 mt-2">
//               <input
//                 type="text"
//                 placeholder="Order Note..."
//                 value={item.note}
//                 readOnly
//                 className="flex-1 bg-[#2d303e] text-sm px-3 py-2 rounded-lg outline-none"
//               />
//               <button>
//                 <img src={deleteicon} alt="Delete" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="border-t border-gray-700 mt-4 pt-4 text-sm">
//         <div className="flex justify-between text-gray-400">
//           <span>Discount</span>
//           <span>5%</span>
//         </div>
//         <div className="flex justify-between mt-2 font-semibold">
//           <span>Sub total</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//       </div>

//       <button className="w-full bg-orange-500 mt-4 py-3 rounded-xl font-medium">
//         Order now
//       </button>
//     </div>
//   );
// }

// export default Second;


// import { useState } from "react";
// import deleteicon from "../assets/delete.svg";

// function Second({ orders = [] }) {

//   const subtotal = orders.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

  

//   return (
//     <div className="w-full max-w-sm h-screen bg-[#1f1d2b] rounded-2xl p-4 text-white flex flex-col">
      
//       <h2 className="text-lg font-semibold mb-4">Orders</h2>

//       {/* HEADER */}
//       <div className="flex justify-between text-sm text-gray-400 border-b border-[#393C49] pb-2">
//         <span>Item</span>
//         <span>Qty</span>
//         <span>Price</span>
//       </div>

//       {/* ORDERS */}
//       <div className="flex-1 overflow-y-auto space-y-4 mt-4">
//         {orders.length === 0 && (
//           <p className="text-gray-400 text-center mt-10">
//             No orders added
//           </p>
//         )}

//         {orders.map((item) => (
//           <div key={item.id}>
//             <div className="flex justify-between items-center">
//               <div className="flex gap-3">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="h-10 w-10 rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm">{item.name}</p>
//                   <p className="text-xs text-gray-400">
//                     ${item.price.toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               <span>{item.qty}</span>
//               <span>${(item.price * item.qty).toFixed(2)}</span>
//             </div>

//             <div className="flex gap-2 mt-2">
//               <input
//                 className="flex-1 bg-[#2d303e] px-3 py-2 rounded-lg text-sm outline-none"
//                 placeholder="Order Note..."
//                 defaultValue={item.note || ""}
//               />
//               <img
//                 src={deleteicon}
//                 alt="delete"
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* TOTAL */}
//       <div className="border-t border-gray-700 pt-4">
//         <div className="flex justify-between">
//           <span>Sub total</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//       </div>

//       <button className="mt-4 bg-orange-500 py-3 rounded-xl">
//         Order now
//       </button>
//     </div>
//   );
// }

// export default Second;







// import { useState } from "react";
// import deleteicon from "../assets/delete.svg";

// function Second({ orders = [] }) {
//   const [orderList, setOrderList] = useState(orders);

//   const handleDelete = (id) => {
//     const updatedOrders = orderList.filter((item) => item.id !== id);
//     setOrderList(updatedOrders);
//   };

//   const subtotal = orderList.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   return (
//     <div className="w-full max-w-sm h-screen bg-[#1f1d2b] rounded-2xl p-4 text-white flex flex-col">
//       <h2 className="text-lg font-semibold mb-4">Orders</h2>

//       {/* HEADER */}
//       <div className="flex justify-between text-sm text-gray-400 border-b border-[#393C49] pb-2">
//         <span>Item</span>
//         <span>Qty</span>
//         <span>Price</span>
//       </div>

//       {/* ORDERS */}
//       <div className="flex-1 overflow-y-auto space-y-4 mt-4">
//         {orderList.length === 0 && (
//           <p className="text-gray-400 text-center mt-10">
//             No orders added
//           </p>
//         )}

//         {orderList.map((item) => (
//           <div key={item.id}>
//             <div className="flex justify-between items-center">
//               <div className="flex gap-3">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="h-10 w-10 rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm">{item.name}</p>
//                   <p className="text-xs text-gray-400">
//                     ${item.price.toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               <span>{item.qty}</span>
//               <span>${(item.price * item.qty).toFixed(2)}</span>
//             </div>

//             <div className="flex gap-2 mt-2">
//               <input
//                 className="flex-1 bg-[#2d303e] px-3 py-2 rounded-lg text-sm outline-none"
//                 placeholder="Order Note..."
//               />
//               <img
//                 src={deleteicon}
//                 alt="delete"
//                 className="cursor-pointer"
//                 onClick={() => handleDelete(item.id)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* TOTAL */}
//       <div className="border-t border-gray-700 pt-4">
//         <div className="flex justify-between">
//           <span>Sub total</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//       </div>

//       <button className="mt-4 bg-orange-500 py-3 rounded-xl">
//         Order now
//       </button>
//     </div>
//   );
// }

// export default Second;







import deleteicon from "../assets/delete.svg";
import { useState } from "react";


function Second({ orders = [], onDelete, onQtyChange, onClear }) {

  const subtotal = orders.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const totalItems = orders.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const [orderType, setOrderType] = useState("dinein");


  return (
    <div className="w-full h-screen bg-[#1f1d2b] rounded-2xl p-4 z-20 text-white flex flex-col ">

      {/* HEADER WITH COUNT */}
      <div className="flex justify-between items-center mb-4  ">
        <h2 className="text-lg font-semibold">
          Orders ({totalItems} items)
        </h2>
        </div>

        {/* ORDER TYPE BUTTONS */}
<div className="grid grid-cols-3 gap-2 mb-4">
  <button
    onClick={() => setOrderType("dinein")}
    className={`py-2 rounded-lg text-sm font-medium
      ${
        orderType === "dinein"
          ? "bg-orange-500 text-white"
          : "bg-[#393C49] text-orange-500"
      }`}
  >
    Dine In
  </button>

  <button
    onClick={() => setOrderType("takeaway")}
    className={`py-2 rounded-lg text-sm font-medium
      ${
        orderType === "takeaway"
          ? "bg-orange-500 text-white"
          : "bg-[#393C49]  text-orange-500"
      }`}
  >
    Take Away
  </button>

  <button
    onClick={() => setOrderType("delivery")}
    className={`py-2 rounded-lg text-sm font-medium
      ${
        orderType === "delivery"
          ? "bg-orange-500 text-white"
          : "bg-[#393C49] text-orange-500"
      }`}
  >
    Delivery
  </button>


{/* 
        {orders.length > 0 && (
          <button
            onClick={onClear}
            className="text-sm text-red-400 hover:text-red-500"
          >
            Clear cart
          </button>
        )} */}
      </div>

      {/* TABLE HEADER */}
      {/* <div className="flex justify-between text-sm text-gray-400 border-b border-[#393C49] pb-2">
        <span>Item</span>
        <span className="flex ml-37">Qty</span>
        <span>Price</span>
      </div> */}
      <div className=" grid grid-cols-3 text-sm text-gray-400 border-b pb-2">
  <span>Item</span>
  <span className="text-center">Qty</span>
  <span className="text-right">Price</span>
</div>


      {/* ORDERS */}
      <div className="flex-1 overflow-y-auto space-y-4 mt-4 hide-scrollbar">
        {orders.length === 0 && (
          <p className="text-gray-400 text-center mt-10">
            No orders added
          </p>
        )}

        {orders.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onQtyChange(item.id, "dec")}
                  className="px-2 bg-[#393C49] rounded"
                >
                  −
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => onQtyChange(item.id, "inc")}
                  className="px-2 bg-[#393C49] rounded"
                >
                  +
                </button>
              </div>

              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>

            <div className="flex gap-2 mt-2">
              <input
                className="flex-1 bg-[#2d303e] px-3 py-2 rounded-lg text-sm outline-none"
                placeholder="Order Note..."
              />
              <img
                src={deleteicon}
                alt="delete"
                className="cursor-pointer"
                onClick={() => onDelete(item.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="border-t border-gray-700 pt-4">
        <div className="flex justify-between">
          <span>Sub total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* SMART ORDER BUTTON */}
      <button
        disabled={orders.length === 0}
        className={`mt-4 py-3 rounded-xl transition
          ${
            orders.length === 0
              ? "bg-gray-600 cursor-not-allowed opacity-50"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
      >
        Order now
      </button>
    </div>
  );
}

export default Second;
