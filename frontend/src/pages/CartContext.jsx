// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export function CartProvider({ children }) {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item) => {
//         setCart((prev) => {
//             const exists = prev.find((i) => i.id === item.id);
//             if (exists) {
//                 return prev.map((i) =>
//                     i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//                 );
//             }
//             return [...prev, { ...item, quantity: 1 }];
//         });
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }
// //add cart
// export default CartProvider;