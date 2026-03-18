import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../constants/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filterMenuProducts = (type: string) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} alt="Plane" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filterMenuProducts("skincare")}>Skincare</li>
          <li onClick={() => filterMenuProducts("conditioner")}>
            Conditioners
          </li>
          <li onClick={() => filterMenuProducts("foundation")}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, index) => (
            <div key={index} className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>${product.price}</span>
                <div>Shop Now</div>
              </div>
              <img src={product.img} alt="Product Image" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
