import React from 'react';
import MIS from '../img/MIS.png'
import KIL from '../img/KIL.png'
import WAT from '../img/WAT.png'
import WAC from '../img/WAC.png'
import COM from '../img/COM.png'

const Cards = () => {
  return (
    <section className="bg-blue-900 py-12 px-4">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative pt-[100%]">
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                -50%
              </div>
              <img
                src={MIS}
                alt="Logitech G502 Gaming Mouse"
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                Logitech G502 Gaming Mouse
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 line-through">$38.00</span>
                <span className="text-lg font-bold text-gray-800">$19.00</span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative pt-[100%]">
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                -30%
              </div>
              <img
                src={KIL}
                alt="NPET K10 Wired Gaming Keyboard"
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                NPET K10 Wired Gaming Keyboard, LED Backlit, Spill...
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 line-through">$49.00</span>
                <span className="text-lg font-bold text-gray-800">$34.30</span>
              </div>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative pt-[100%]">
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                -20%
              </div>
              <img
                src={WAT}
                alt="Apple Watch Series 7"
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                Apple Watch Series 7 (GPS, 41MM)
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 line-through">$289.00</span>
                <span className="text-lg font-bold text-gray-800">$231.20</span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative pt-[100%]">
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                -25%
              </div>
              <img
                src={COM}
                alt="Apple MacBook Air M2"
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 line-through">$950.22</span>
                <span className="text-lg font-bold text-gray-800">$712.66</span>
              </div>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative pt-[100%]">
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                -17%
              </div>
              <img
                src={WAC}
                alt="Samsung Galaxy Watch"
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
                Samsung Galaxy Watch Galaxy  Watch
              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 line-through">$120.00</span>
                <span className="text-lg font-bold text-gray-800">$99.60</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cards;