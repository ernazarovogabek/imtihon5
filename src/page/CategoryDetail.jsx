import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const categoryNames = {
  1: "Accessories",
  2: "Camera",
  3: "Laptop",
  4: "Smart Phone",
  5: "Gaming",
  6: "Smart Watch",
};

const CategoryDetail = () => {
  const { id } = useParams(); 
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
        );
        if (!res.ok) throw new Error("Serverdan ma'lumot kelmadi");

        const data = await res.json();
        
        const findCategory = data.find((item) => String(item.id) === String(id));
        if (!findCategory) throw new Error("Kategoriya topilmadi");

        setCategory(findCategory);
      } catch (err) {
        setError(err.message || "Xatolik mavjud");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) return <p className="text-center p-4">Yuklanmoqda...</p>;
  if (error)
    return <p className="text-center text-red-600 p-4">Xato: {error}</p>;

  return (
    <div className="max-w-[1300px] mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">
        {categoryNames[id] || "Category"} Products
      </h2>

      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
         Orqaga
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.products && category.products.length > 0 ? (
          category.products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  onError={(e) =>
                    (e.currentTarget.src = "https://via.placeholder.com/200")
                  }
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-1">${product.price}</p>
                  <p className="text-yellow-500 mt-1">{product.rating}</p>
                  <p className="text-sm text-gray-500 mt-2">{product.brand}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-4">Mahsulotlar yo'q</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
