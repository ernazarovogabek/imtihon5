import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Product Detail — ID: {id}</h1>
      <p>Bu yerga product haqidagi batafsil ma’lumot chiqadi.</p>
    </div>
  );
};

export default ProductDetail;
