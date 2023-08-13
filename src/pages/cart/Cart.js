import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQty,
  deleteItem,
  increamentQty,
  resetCart,
} from "../../redux/shop";
import cartimg from '../../assets/shopcart.avif'
import { ToastContainer, toast } from 'react-toastify'
import { Link, Navigate } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai';


const Cart = () => {
    const [totalAmount, setTotalAmount] = useState("");

    const dispatch = useDispatch();

    const productData = useSelector((state)=>{
        return state.shop.productData
    })
    
    useEffect(()=>{
      let price = 0
      productData.map((item)=>{
        price += item.price * item.quantity;
        return price;
      })
      setTotalAmount(price.toFixed(2))
    },[productData])

    
  

  return (
    <section className='all-cart'>
      <div className="table">
        <div className="table">
          {productData.length === 0 ? (
            <>
              <div className='empty-cart'>
                <img src={cartimg} style={{width:'250px'}} alt="" />
                <div className='empty-carts'>Your cart is currently empty</div>
                <br />
                <div>
                  <Link style={{ textDecoration: "none", color:'gray' }} to="/">
                    &larr; Please click here to start shopping
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>S/n</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((item, index) => {
                    const { _id, price, quantity, image, title } = item;
                    return (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={image} className='carts-img' alt="" />
                        </td>
                        <td className='carts-tittle'>{title}</td>
                        <td>{price}</td>
                        <td>
                          <div className="qty">
                            <div className="control">
                              <button
                                className="decrease"
                                onClick={() =>
                                  dispatch(
                                    decrementQty({
                                      _id: item._id,
                                      title: item.title,
                                      image: item.image,
                                      price: item.price,
                                      quantity: 1,
                                      description: item.description,
                                    })
                                  )
                                }
                              >
                                <b>-</b>
                              </button>
                              <span className="item-qty">{item.quantity}</span>
                              <button
                                className="increase"
                                onClick={() =>
                                  dispatch(
                                    increamentQty({
                                      _id: item._id,
                                      title: item.title,
                                      image: item.image,
                                      price: item.price,
                                      quantity: 1,
                                      description: item.description,
                                    })
                                  )
                                }
                              >
                                <b>+</b>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div className="item_quantity">
                            ${item.quantity * item.price}
                          </div>
                        </td>
                        <td>
                          
                          <AiFillCloseCircle size={20}
                            onClick={() => {
                              return (
                                dispatch(deleteItem(item._id)) &
                                toast.error(`${item.title} is removed`)
                              );
                            }}
                            className="icon"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className='cart-center'>
                <button
                  onClick={() =>
                    dispatch(resetCart()) & toast.error(`Your cart is empty!`)
                  }
                  className="resetcart"
                >
                  Reset Cart
                </button>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  <button className="shoppingLink">
                   &larr;  Go Shopping
                  </button>
                </Link>
              </div>
              <div className="cart-boxes">
                <div className="cart-right">
                  <div className="cart-right-items">
                    <h3>Cart Total</h3>
                    <p className="subTotal"> SubTotal: ${totalAmount}</p>
                    <p className="shipping">
                      Taxes and shipping calculated at payment
                    </p>
                    
                    <button className='payment'>Proceed to checkout</button>
                  </div>
                </div>
                <ToastContainer
                  position="top-left"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart