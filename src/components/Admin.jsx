import React, { useEffect, useState } from "react";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );

        if (!response.ok) {
          throw new Error(`HTTP xato! Status: ${response.status}`);
        }

        const data = await response.json();

        
        const bestCategory = data.find((cat) => cat.category === "Best Sellers");
        const productsList = bestCategory?.products || [];

        setProducts(productsList);
        setLoading(false);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="p-6 text-center text-lg">Yuklanmoqda...</p>;
  }

  if (error) {
    return (
      <p className="p-6 text-center text-red-600 text-lg">
        Xatolik: {error}
      </p>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Panel - Best Sellers</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">Hech qanday mahsulot topilmadi.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={product.image || "https://via.placeholder.com/150?text=Rasm+Yoq"}
                alt={product.name}
                className="w-full h-32 object-contain mb-3"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150?text=Rasm+Mavjud+Emas";
                }}
              />
              <h3 className="font-semibold text-gray-800 text-center text-sm line-clamp-2 h-12">
                {product.name}
              </h3>
              <p className="text-gray-600 text-xs mt-1">Brand: {product.brand}</p>
              <p className="font-bold text-gray-900 mt-2">
                ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
              </p>
              <p className="text-yellow-500 text-sm mt-1"> {product.rating}</p>
              <p className="text-gray-500 text-xs mt-1">Ombor: {product.stock} dona</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;