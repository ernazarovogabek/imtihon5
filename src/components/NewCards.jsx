import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://691aa27e2d8d7855756f8c58.mockapi.io/products2")
      .then((res) => res.json())
      .then((data) => {
        const newProductsCategory = data.find(
          (cat) => cat.category === "New Products"
        );
        setProducts(newProductsCategory?.products.slice(0, 4) || []); // faqat 4 tasi
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="container max-w-[1300px] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Products</h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition">
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/200x200?text=Rasm+Mavjud+Emas")
                  }
                />
                <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                  ❤️
                </button>
              </div>

              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                {item.name}
              </h3>

              <div className="mt-auto flex justify-between items-center">
                <span className="font-bold text-lg">${item.price}</span>
                <div className="flex items-center">
                  ⭐ <span className="ml-1 text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewCards;
