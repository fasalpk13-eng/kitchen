// import { useState } from "react";
// import Sidebar from "./Navbar";
// import Home from "./Home";
// import Second from "./second";

// function Dashboard() {
//   const [orders, setOrders] = useState([]);

//   // Add item from Home
//   const addOrder = (item) => {
//     setOrders((prev) => {
//       const existing = prev.find((o) => o.id === item.id);

//       if (existing) {
//         return prev.map((o) =>
//           o.id === item.id
//             ? { ...o, qty: o.qty + 1 }
//             : o
//         );
//       }

//       return [
//         ...prev,
//         {
//           id: item.id,
//           name: item.name,
//           img: item.img,
//           price: Number(item.price), // ensure number
//           qty: 1,
//           note: "",
//         },
//       ];
//     });
//   };

//   return (
//     <div className="flex h-screen bg-[#1f2433] text-white">

//       {/* LEFT – SIDEBAR */}
//       <div className="hidden md:block w-22.5 bg-[#1f1d2b] shrink-0">
//         <Sidebar />
//       </div>

//       {/* CENTER + RIGHT */}
//       <div className="flex flex-1 overflow-hidden">

//         {/* CENTER – HOME */}
//         <div className="flex-1 overflow-y-auto hide-scrollbar">
//           <Home addOrder={addOrder} />
//         </div>

//         {/* RIGHT – ORDERS */}
//         <div className="hidden md:block w-90 bg-[#1f1d2b] shrink-0">
//           <Second orders={orders} />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import { useState, useEffect } from "react";
import Sidebar from "./Navbar";
import Home from "./Home";

import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";




function Dashboard() {
  // ✅ Load from localStorage
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ADD ITEM 
  const addOrder = (item) => {
    setOrders((prev) => {
      const existing = prev.find((o) => o.id === item.id);

      if (existing) {
        return prev.map((o) =>
          o.id === item.id ? { ...o, qty: o.qty + 1 } : o
        );
      }

      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          img: item.img,
          price: Number(item.price),
          qty: 1,
          note: "",
        },
      ];
    });
  };

  // DELETE
  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };

  // QTY CHANGE
  const updateQty = (id, type) => {
    setOrders((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty =
              type === "inc" ? item.qty + 1 : item.qty - 1;
            return newQty <= 0 ? null : { ...item, qty: newQty };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // ✅ CLEAR ALL
  const clearOrders = () => {
    setOrders([]);
  };
  // total count
  const [showCart, setShowCart] = useState(false);

  const cartCount = orders.reduce(
  (sum, item) => sum + item.qty,
  0
);




  return (
    <div className="flex h-screen bg-[#1f2433] text-white">

      <div className="hidden md:block w-22.5 bg-[#1f1d2b] shrink-0">
        <Sidebar />
      </div>

      <div className="flex flex-1 overflow-hidden">

        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <Home addOrder={addOrder} />
        </div>

      {showCart && (
  <div
    className="fixed inset-0 z-40 flex justify-end bg-black/40"
    onClick={() => setShowCart(false)}
  >
    <div
      className="w-90 bg-[#1f1d2b] h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <Order
        orders={orders}
        onDelete={deleteOrder}
        onQtyChange={updateQty}
        onClear={clearOrders}
        onClose={() => setShowCart(false)}
      />
    </div>
  </div>
)}

      {!showCart && (
  <button
    onClick={() => setShowCart(true)}
    className={`fixed top-8 right-6 w-12 h-12 rounded-full z-50 flex items-center justify-center
     
      ${
        cartCount > 0
          ? "bg-orange-500 animate-pulse"
          : "bg-[#2a2f42]"
      }

    `}
    
    
  >
    {/* Cart Icon */}
    <FaShoppingCart className="text-xl text-white" />

    {/* Count Badge */}
    {cartCount > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
    )}
  </button>
)}

      </div>
    </div>
  );
}

export default Dashboard;

