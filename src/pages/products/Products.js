import React from "react";
import { Card } from "components";
import { ProductList } from "./ProductStyle";
import { products } from "../../products";

const Products = () => {
  return (
    <ProductList>
      {products.items.map((product, i) => (
        <Card key={i} {...product} />
      ))}
    </ProductList>
  );
};

export default Products;
