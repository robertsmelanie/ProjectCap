// import { useCart } from './CartContext';

// export default function Cart() {
//     const { cart } = useCart();

//     const total = cart.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//     );

//     return (
//         <div>
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>No items in cart.</p>
//             ) : (
//                 <>
//                     {cart.map((item) => (
//                         <div key={item.id}>
//                             <p>{item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${total.toFixed(2)}</h3>
//                 </>
//             )}
//         </div>
//     );
// }