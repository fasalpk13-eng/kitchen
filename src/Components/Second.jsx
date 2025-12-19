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
      <div className="flex text-sm text-gray-400 border-b pb-2">
  <span className="flex-1 ">Item</span>
  <span className="w-15 text-center">Qty</span>
  <span className="w-1500 text-right">Price</span>
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


