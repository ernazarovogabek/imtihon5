import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards'
import Products from './Products';
import { Link } from 'react-router-dom';
import Login from './Login';
import Brand from './Brand';
import Blog from './Blog'
import NewCards from './NewCards'


const categoryNames = {
  1: "Accessories",
  2: "Camera",
  3: "Laptop",
  4: "Smart Phone",
  5: "Gaming",
  6: "Smart Watch",
};

const Homes = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://691aa27e2d8d7855756f8c58.mockapi.io/products2');
        if (!res.ok) throw new Error(`HTTP xato! Status: ${res.status}`);
        const data = await res.json();

        const filtered = data.filter(cat => cat.id >= 1 && cat.id <= 6);
        setCategories(filtered);
      } catch (err) {
        setError(err.message || "Noma'lum xato");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p className="text-center p-4">Yuklanmoqda …</p>;
  if (error) return <p className="text-center p-4 text-red-500">Xato: {error}</p>;

  return (
    <>
    <div className="max-w-[1300px] mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map(cat => {
         
          const firstProductImage = cat.products && cat.products.length > 0 
            ? cat.products[0].image 
            : 'https://via.placeholder.com/300';
          
          return (
            <Link to={`/category/${cat.id}`} key={cat.id}>
              <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src={firstProductImage}
                  alt={categoryNames[cat.id] || cat.category}
                  className="w-full h-48 object-cover"
                  onError={e => { e.currentTarget.src = 'https://via.placeholder.com/300'; }}
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{categoryNames[cat.id] || cat.category}</h3>
                </div>
              </div>
            </Link>

          )
        })}
      </div>





      
    </div>

   
<Cards/>
<NewCards/>
<Login/>
<Products/>
<Brand/>
<Blog/>
    
    </>


  );
};

export default Homes;




















