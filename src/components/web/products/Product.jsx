import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/Cart.jsx';

function Product() {
  const { productId } = useParams();

  const {addToCartContext}=useContext(CartContext);

  const getProduct = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
    return data.product;
  }

  const { data, isLoading } = useQuery('product', getProduct);


  const addToCart = async (productId)=>{
    const res = await addToCartContext(productId);
    console.log(res);
  }


  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {data.subImages.map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={img.secure_url} className="d-block w-100" alt={`Product ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-3">{data.name}</h2>
          <p className="lead text-muted">{data.description}</p>
          <p className="fw-bold mt-3">Price: ${Number(data.price).toFixed(2)}</p>
          <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add To Cart</button>
          {/* Additional product details can be displayed here */}
        </div>
      </div>
    </div>
  );
}

export default Product;
