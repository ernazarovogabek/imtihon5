import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { id } = useParams(); 
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(
          `https://691aa27e2d8d7855756f8c58.mockapi.io/products2/${id}`
        );
        if (!res.ok) throw new Error("Ma'lumot topilmadi");
        const data = await res.json();
        setCategory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <p className="text-center p-4">Yuklanmoqda…</p>;
  if (error) return <p className="text-center p-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h2 className="text-3xl font-bold mb-5">{category.category}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.products?.map((product, idx) => (
          <div key={idx} className="border rounded-lg shadow p-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/300")}
            />
            <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;