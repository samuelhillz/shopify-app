import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/shop";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = () => {
  const dispatch = useDispatch();
  let [mainqty, setMainQty] = useState(1);
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div className="singlepage">
      <div className="single-banner">Product Details</div>
      <div className="singlepage_box">
        <div className="left">
          <img className="img" src={details.image} alt={details.title} />
        </div>
        <div className="right">
          <h3>{details.title}</h3>
          <div className="prices">
            <p className="price oldprice">${details.oldPrice}</p>
            <p className="price newprice">${details.price}</p>
          </div>
          <p className="desc">{details.description}</p>
          <h4 className="ratings">
            Ratings: <span>{details.rating}</span>
          </h4>

          <div className="categories">
            <h4>
              Category: <span>{details.category}</span>
            </h4>
          </div>

          <div className="quantity">
            <h4>Quantity:</h4>
            <div className="regulators">
              <button
                onClick={() =>
                  setMainQty(mainqty === 1 ? (mainqty = 1) : mainqty - 1)
                }
                className="decreament count"
              >
                <b>-</b>
              </button>
              <span className="amount">{mainqty}</span>
              <button
                onClick={() => setMainQty(mainqty + 1)}
                className="increament count"
              >
                <b>+</b>
              </button>
            </div>
          </div>
          <div className="addtocart">
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: mainqty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="btn_addtocart"
            >
              Add To Cart
            </button>
          </div>
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
  );
};

export default SingleProduct;
