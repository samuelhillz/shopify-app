import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/shop';
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({product}) => {
        const dispatch = useDispatch();

    const navigate = useNavigate();
    const _id = product.title;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(' ').join('');
    }
    const rootId = idString(_id);
    console.log(rootId)

    const handleDetails = () => {
        navigate(`/singleproduct/${rootId}`, {
            state: {
                item: product,
            },
        });
    };
    
    return (
      <div className=" productcard-wrapper">
        <div className="products_card">
          <div onClick={handleDetails} className="img">
            <img className="image" src={product.image} alt="" />
          </div>

          <div className="boxshadow">
            <div className="tittle">
              <div>{product.title.substring(0, 26)}</div>
              <div className="price">
                <p className="old-price">${product.oldPrice}</p>
                <p className="new-price">${product.price}</p>
              </div>
            </div>
            <div className="rating">Ratings: {product.rating}</div>
            <div className="category">{product.category}</div>
            {product.isNew && <p className="sale">Sale</p>}
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added`)
              }
              className="addingtocart"
            >
              Add To Cart
            </button>
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
}

export default ProductCard