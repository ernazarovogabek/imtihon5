import React from 'react';
import AS from '../img/AS.png';
import WQ from '../img/WQ.png';
import PHO from '../img/PHO.png';

const Login = () => {
  return (
    <section className="py-12 max-w-[1300px] mx-auto px-4">

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl overflow-hidden shadow-lg">

       
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 md:p-8 relative">

        
          <div className="absolute top-10 left-[-80px] w-35 h-35 opacity-80">
            <img src={AS} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute right-10 top-[-65px] w-36 h-26 opacity-80">
            <img src={AS} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-0 left-1/2 w-30 h-30 opacity-95 -translate-x-1/2 translate-y-4">
            <img src={AS} alt="" className="w-full h-full object-contain ml-67" />
          </div>

         
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Iphone 15 Series</h3>

         
          <div className="flex flex-col md:flex-row gap-6 items-start">

           
            <div className="md:w-1/2">
              <img src={PHO} alt="iPhone 15" className="w-full h-auto rounded-lg" />
            </div>

           
            <div className="md:w-1/2 flex flex-col justify-between">
             
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border border-white/30 bg-white/20 text-center py-2 px-3 rounded-md">
                    <div className="text-lg font-bold">8</div>
                    <div className="text-xs">Days</div>
                  </div>
                ))}
              </div>

             
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-black mb-2">It feels good to be the first</h4>
                <p className="text-white/80 text-sm md:text-base mb-4">
                  Get ready for the future of smartphones. Experience innovation like never before.
                  Stay tuned for the big iPhone 15 pre-sale.
                </p>
                <button className="bg-blue-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                  Register Now
                </button>
              </div>
            </div>

          </div>

        </div>

        
        <div className="bg-gradient-to-r from-indigo-600 overflow-hidden to-blue-700 p-6 md:p-8 relative">

          
          <div className="absolute bottom-[-90px] left-[-40px] w-170 h-60 bg-yellow-400 opacity-50 rounded-full translate-x-4 translate-y-4"></div>
          <div className="absolute top-[-55px] left-[-50px] w-40 h-40 bg-yellow-400 opacity-90 rounded-full"></div>

          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Play Station 5</h3>

         
          <div className="flex justify-center mb-6">
            <img src={WQ} alt="PlayStation 5" className="max-w-full h-auto rounded-lg" />
          </div>

          
          <div className="text-center">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Digital Edition + 2TB</h4>
            <button className="bg-blue-900 hover:bg-blue-950 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              Buy Now
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;