import React, { useState } from "react";

// data
const PRODUCTS = [
  { category: "entertainment", name: "Football" },
  { category: "entertainment", name: "Baseball" },
  { category: "entertainment", name: "Basketball" },
  { category: "fashion", name: "iPod Touch" },
  { category: "design", name: "iPhone 5" },
  { category: "design", name: "Nexus 7" },
  { category: "leisure", name: "Holiday" },
];

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map((prod) => prod.category).filter(
  uniqueItems
);

function Categories({ products, productCategories }) {
  return <div></div>;
}

export default Categories;
