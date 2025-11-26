import React from 'react';
import DY from '../img/DY.png'
import APP from '../img/APP.png'
import SO from '../img/SO.png'
import SW from '../img/SW.png'
import HUA from '../img/HUA.png'
import Len from '../img/Len.png'
import CAN from '../img/CAN.png'


const Brand = () => {
  return (
    <section className=" px-4 max-w-[1300px] mx-auto ">

      
      <h2 className="text-xl font-bold text-gray-800 mb-8">Top Brands</h2>

    
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
        <img src={APP} alt="Apple" className="h-8 md:h-10" />
        <img src={SO} alt="Sony" className="h-8 md:h-10" />
        <img src={SW} alt="Samsung" className="h-8 md:h-10" />
        <img src={CAN} alt="Canon" className="h-8 md:h-10" />
        <img src={HUA} alt="Huawei" className="h-8 md:h-10" />
        <img src={Len} alt="Lenovo" className="h-8 md:h-10" />
      </div>

      
      <div className="relative rounded-lg overflow-hidden shadow-lg border border-blue-300">
        <div className="bg-gradient-to-r from-slate-800 to-orange-500 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          
         
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">SMART WATCH</h3>
            <p className="text-sm md:text-base opacity-90 mb-6">Various designs and brands</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              view
            </button>
          </div>

        
          <div className="md:w-1/2 flex justify-center">
            <img
              src={DY}
              alt="Smart Watches"
              className="max-w-full h-auto rounded-lg"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Brand;