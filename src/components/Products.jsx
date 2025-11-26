import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
       
        const response = await fetch('https://691aa27e2d8d7855756f8c58.mockapi.io/products2');

        if (!response.ok) {
          throw new Error(`HTTP xato! Status: ${response.status}`);
        }

        const data = await response.json();

        
        const bestSellersCategory = data.find(cat => cat.category === "Best Sellers");

       
        const productList = bestSellersCategory?.products || [];

        setProducts(productList);
        setLoading(false);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  if (loading) {
    return (
      <section className="py-12 text-center bg-gray-50">
        <p className="text-gray-600 text-lg">Best Sellers yuklanmoqda...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 text-center bg-gray-50">
        <p className="text-red-600">Xatolik: {error}</p>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Best Sellers
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">Eng ko'p sotiladigan mahsulotlar mavjud emas.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col h-full">
                  <img
                    src={product.image || "https://via.placeholder.com/150x150?text=Rasm+Yoq"}
                    alt={product.name}
                    className="w-full h-32 object-contain mb-4 rounded"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150x150?text=Rasm+Mavjud+Emas";
                    }}
                  />
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 flex-grow">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-900">
                      ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                    </span>
                    <span className="text-xs text-gray-500">{product.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Brand: {product.brand}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;