import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import faker from "@faker-js/faker";
import "./Styles.css";

function Home() {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  faker.seed(100);
  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
}

export default Home;
