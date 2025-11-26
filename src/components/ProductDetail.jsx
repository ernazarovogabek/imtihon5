import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        
        const response = await fetch('https://691aa27e2d8d7855756f8c58.mockapi.io/products2');

        if (!response.ok) {
          throw new Error(`HTTP xato! Status: ${response.status}`);
        }

        const categories = await response.json();

       
        const allProducts = categories.flatMap(cat => cat.products || []);

     
        const foundProduct = allProducts.find(p => String(p.id) === String(id));

        if (!foundProduct) {
          throw new Error('Mahsulot topilmadi');
        }

        setProduct(foundProduct);
        setLoading(false);
      } catch (err) {
        console.error('Xatolik:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return (
      <section className="py-12 text-center bg-gray-50">
        <p className="text-gray-600">Mahsulot ma'lumotlari yuklanmoqda...</p>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="py-12 text-center bg-gray-50">
        <p className="text-red-600">{error || 'Mahsulot topilmadi'}</p>
        <Link to="/products" className="text-blue-600 mt-4 inline-block hover:underline">
          ← Orqaga
        </Link>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <Link to="/products" className="text-blue-600 mb-6 inline-block hover:underline">
          ← Barcha mahsulotlar
        </Link>

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






















  </div>
    </section>
  );
};

export default ProductDetail;