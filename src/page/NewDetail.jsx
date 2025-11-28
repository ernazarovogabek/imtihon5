import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://691aa27e2d8d7855756f8c58.mockapi.io/products2")
      .then((res) => res.json())
      .then((data) => {
        
        let found = null;
        data.forEach((cat) => {
          const prod = cat.products.find((p) => p.id === id);
          if (prod) found = prod;
        });
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mb-4 object-contain"
      />
      <p className="mb-2 text-lg font-semibold">Price: ${product.price}</p>
      <p className="mb-2 text-yellow-500">Rating: ⭐ {product.rating}</p>
      <p className="mb-2">Brand: {product.brand}</p>
      <p className="mb-2">Description: {product.description}</p>
      <p className="mb-2">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetail;
