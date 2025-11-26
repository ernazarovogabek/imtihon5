import React from 'react';
import IM from '../img/IM.png';
import BG from '../img/BG.png';
import BR from '../img/BR.png';
import IC from '../img/IC.png';
import KI from '../img/KI.png';
import Gr from '../img/Gr.png';
import CL from '../img/CL.png';

const BlogSection = () => {
  return (
    <section className="px-4 max-w-[1300px] mx-auto overflow-hidden">

     
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Blogs</h2>
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1">
          View all <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
          <img src={IM} alt="Meta Platforms" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Meta Platforms plans to release fre...</h3>
            <p className="text-gray-600 text-sm mb-4">The parent company of Facebook, Meta Platforms, is introducing software to help deve...</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span><i className="fa-regular fa-calendar mr-1"></i> August 8, 2023</span>
              <span><i className="fa-regular fa-clock mr-1"></i> 3 min read</span>
            </div>
          </div>
        </div>

      
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
          <img src={BG} alt="Headphones" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg text-yellow-600 mb-2">
              8 Things You Probably Didn't Know About Headphones
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Owning a headphone could mean a different thing for different people...
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span><i className="fa-regular fa-calendar mr-1"></i> March 28, 2023</span>
              <i className="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
          <img src={BR} alt="Bitcoin Price Drop" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Analyzing the August 17th Bitcoin Price Drop</h3>
            <p className="text-gray-600 text-sm mb-4">On August 17th at 9:30PM UTC, Bitcoin's price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled...</p>
            <div className="text-sm text-gray-500">
              <span><i className="fa-regular fa-calendar mr-1"></i> August 17, 2023</span>
            </div>
          </div>
        </div>

      </div>

      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={IC} alt="Latest Tech" className="w-10 h-10 mb-2" />
          <span className="text-sm font-medium text-gray-700">Latest and Greatest Tech</span>
        </div>

<div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={KI} alt="Guarantee" className="w-10 h-10 mb-2" />
          <span className="text-sm font-medium text-gray-700">Guarantee</span>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={Gr} alt="Free Shipping" className="w-10 h-10 mb-2" />
          <span className="text-sm font-medium text-gray-700">Free Shipping over $1000</span>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <img src={CL} alt="24/7 Support" className="w-10 h-10 mb-2" />
          <span className="text-sm font-medium text-gray-700">24/7 Support</span>
        </div>

      </div>

    </section>
  );
};

export default BlogSection;