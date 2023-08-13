// import React, { useState } from 'react'
// import './CartItem.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { AiFillCloseCircle } from "react-icons/ai"; 
// import { decrementQty, deleteItem, increamentQty, resetCart } from '../../redux/shop';
// import { toast,ToastContainer } from 'react-toastify';
// import { Link, useNavigate } from 'react-router-dom';
// import {BsArrowLeft} from 'react-icons/bs';


// const CartItem = () => {
//     const [showProceed, setShowProceed] = useState(false);
// // 
   
// // 
//     const dispatch = useDispatch();
//     const navigate = useNavigate()

//   const productData = useSelector((state)=>state.shop.productData)
//   console.log(productData)

//    const handleReset = () => {  dispatch(resetCart()) ;
//      setTimeout(() => {
//       navigate("/emptycart");
//      },700);
//    };
  
    
//   return (
//     <>
//       <div>
//         <h2>Shoping Cart</h2>
//       </div>
//       <div>
        
//       </div>
//       <div className="productData">
//         {productData.map((item) => {
//           return (
//             <div className="cart-box" key={item._id}>
//               <div className="img-ctn">
//                 <AiFillCloseCircle
//                   onClick={() => {
//                     return (
//                       dispatch(deleteItem(item._id)) &
//                       toast.error(`${item.title} is removed`)
//                     );
//                   }}
//                   className="icon"
//                 />
//                 <img className="cartImage" src={item.image} alt="" />
//               </div>
//               <div className="product-tittle">
//                 {item.title}
//               </div>
//               <p className="item-price">${item.price}</p>
//               <div className="qty">
//                 <div className="control">
//                   <button
//                     className="decrease"
//                     onClick={() =>
//                       dispatch(
//                         decrementQty({
//                           _id: item._id,
//                           title: item.title,
//                           image: item.image,
//                           price: item.price,
//                           quantity: 1,
//                           description: item.description,
//                         })
//                       )
//                     }
//                   >
//                     <b>-</b>
//                   </button>
//                   <span className="item-qty">{item.quantity}</span>
//                   <button
//                     className="increase"
//                     onClick={() =>
//                       dispatch(
//                         increamentQty({
//                           _id: item._id,
//                           title: item.title,
//                           image: item.image,
//                           price: item.price,
//                           quantity: 1,
//                           description: item.description,
//                         })
//                       )
//                     }
//                   >
//                     <b>+</b>
//                   </button>
//                 </div>
//               </div>
//               <div className="item_quantity">${item.quantity * item.price}</div>
//             </div>
//           );
//         })}
//       </div>
//       <button onClick={handleReset}
//         // onClick={() =>
//         //   dispatch(resetCart()) & toast.error(`Your cart is empty!`)
//         // }
//         className="resetcart"
//       >
//         Reset Cart
//       </button>
//       <Link style={{ textDecoration: "none" }} className="toshopping" to="/">
//         <button className="shoppingLink">
//           <span>
//             <BsArrowLeft size={20} />
//           </span>
//           Go Shopping
//         </button>
//       </Link>
//       <ToastContainer
//         position="top-left"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </>
//   );
// }

// export default CartItem