import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://691aa27e2d8d7855756f8c58.mockapi.io/products2');
        if (!res.ok) throw new Error('HTTP xato!');

        const categories = await res.json();
        const productsList = categories.flatMap(cat => cat.products || []);
        setAllProducts(productsList);

        const found = productsList.find(p => String(p.id) === String(id));
        if (!found) throw new Error('Mahsulot topilmadi');
        setProduct(found);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-red-600 text-center py-20">{error}</p>;

  const otherProducts = allProducts.filter(p => String(p.id) !== String(id));

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
      
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <Link to="/" className="text-blue-600 mb-4 inline-block">← Barcha mahsulotlar</Link>
          <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4" />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg font-semibold mb-1">Price: ${product.price}</p>
          <p className="text-yellow-500 mb-1">Rating: ⭐ {product.rating}</p>
          <p className="mb-1 text-gray-600">Brand: {product.brand}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
          <p className="text-gray-700 mt-2">{product.description}</p>
        </div>

        
        <h3 className="text-xl font-semibold mb-4">Boshqa mahsulotlar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProducts.map(p => (
            <Link to={`/product/${p.id}`} key={p.id}>
              <div className="bg-white rounded-lg shadow-md p-2 flex flex-col h-full hover:shadow-lg transition">
                <img src={p.image} alt={p.name} className="w-full h-32 object-contain mb-2" />
                <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">{p.name}</h3>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm font-bold">${p.price}</span>
                  <span className="text-xs text-gray-500">{p.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
