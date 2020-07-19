import React, { useContext, useEffect } from "react";
import { Card } from "components";
import { ProductList } from "./ProductStyle";
import { products } from "../../products";
import { StoreContext } from "store";

const Products = () => {
  const { cartItems } = useContext(StoreContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  }, [cartItems.value]);

  const addItem = (selectedPack, { uuid, name, image }) => {
    const selectedProduct = {
      uuid,
      name,
      image,
      selectedPack,
    };

    selectedProduct.selectedPack.quantity = 1;
    cartItems.set([...cartItems.value, selectedProduct]);
  };

  return (
    <ProductList>
      {products.items.map((product, i) => (
        <Card
          key={i}
          {...product}
          addItem={(selectedPack) => addItem(selectedPack, product)}
          increaseQuantity={(selectedPack) => cartItems.increaseQuantity(selectedPack)}
          decreaseQuantity={(selectedPack) => cartItems.decreaseQuantity(selectedPack)}
        />
      ))}
    </ProductList>
  );
};

export default Products;
