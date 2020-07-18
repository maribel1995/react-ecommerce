import React, { useState, useContext, useEffect } from "react";
import { Card } from "components";
import { ProductList } from "./ProductStyle";
import { products } from "../../products";
import { StoreContext } from "store";

const Products = () => {
  const { cartItems } = useContext(StoreContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  }, [cartItems.value]);

  const addItem = (selectedPack) => {
    cartItems.set([...cartItems.value, selectedPack]);
  };

  return (
    <ProductList>
      {products.items.map((product, i) => (
        <Card key={i} {...product} addItem={addItem} />
      ))}
    </ProductList>
  );
};

export default Products;
