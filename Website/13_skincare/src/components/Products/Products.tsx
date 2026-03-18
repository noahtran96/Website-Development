import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../constants/products";

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  return (
    <div className={css.container}>
      <img src={Plane} alt="Plane" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li>All</li>
          <li>Skincare</li>
          <li>Conditioners</li>
          <li>Foundations</li>
        </ul>
        <div className={css.list}>
          {MenuProducts.map((product, index) => (
            <div key={index} className={css.product}>
              Products
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
