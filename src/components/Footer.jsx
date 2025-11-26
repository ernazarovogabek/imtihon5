import React from 'react';
import PAY from '../img/PAY.png';
import Aca from '../img/Aca.png';
import Visa from '../img/Visa.png';
import Mas from '../img/Mas.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-4">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">

         
          <div className='text-center'>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300 transition">about us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">blog</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">returns</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">order status</a></li>
            </ul>
          </div>

        
          <div className='text-center'>
            <h3 className="font-bold text-lg mb-4">Info</h3>
            <ul className="space-y-2 text-sm text-center">
              <li><a href="#" className="hover:text-blue-300 transition">How it works?</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">our promises</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">FAQ</a></li>
            </ul>
          </div>

          
          <div className='text-center'>
            <h3 className="font-bold text-lg mb-4">Contact us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Main Street, Anytown, USA
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-sm"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-regular fa-envelope text-sm"></i>
                TechHelmSupport@gmail.com
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-lg mb-4">Sign up for News and updates</h3>
            <div className="flex items-center border border-gray-600 rounded-full px-4 py-2 mb-4">
               <i className="fa-regular fa-user"></i>
              <input
                type="email"
                placeholder="E-mail Address"
                className="bg-transparent outline-none flex-grow text-sm min-w-0"
              />
           
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-blue-300 transition">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-xl hover:text-blue-300 transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-xl hover:text-blue-300 transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-xl hover:text-blue-300 transition">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

       
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex items-center space-x-3 mb-4 md:mb-0 flex-wrap justify-center md:justify-start">
            <span>© 2023 Tech Helm.</span>
            <div className="flex space-x-2">
              <img src={PAY} alt="Apple Pay" className="h-5" />
              <img src={Aca} alt="Academy" className="h-5" />
              <img src={Visa} alt="Visa" className="h-5" />
              <img src={Mas} alt="Mastercard" className="h-5" />
            </div>
          </div>
          <div className="flex space-x-6 flex-wrap justify-center md:justify-end gap-y-2">
            <a href="#" className="hover:text-white transition">cookie settings</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms and Conditions</a>
            <a href="#" className="hover:text-white transition">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;