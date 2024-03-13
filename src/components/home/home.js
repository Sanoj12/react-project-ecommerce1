import React, { useState, useEffect } from "react";
import "./home.css";
import { getAllProducts } from "../../apiServices/api";
import { Link } from 'react-router-dom'

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    return async () => {
      const data = await getAllProducts();
      console.log(data);
      setProducts(data);
    };
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (

        <div className="product" key={product.id}>

          <img src={product.image} alt="alt" />

          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>
  <Link to={`/details/${product.id}`}>
  <button>details</button>
  </Link>
          
        </div>
      ))}
    </div>
  );
}

export default Home;
