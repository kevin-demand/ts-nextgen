import { useState } from 'react';
import Link from 'next/link';
const Preheader = () => {
 

  return (
    <div className="relative bg-black border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-3 md:justify-start md:space-x-10">
          
            <div className="flex lg:w-0 lg:flex-1 flex-row">
            <Link href='/contact'>
              <a className='text-gray-50'>Find a Store</a>
            </Link>
            <Link href='tel:+18888883743'>
            <a className='text-gray-50'>1-888 TUFF SHED</a>
            </Link>

          </div>
          <div className="flex lg:w-0 lg:flex-1 flex-row-reverse">
            <Link href="/">
              <a className='text-gray-50'>
             <span className='inline-block '> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span><span className='inline-block'>
                My Delivery Zip: 80222</span>
              </a>
            </Link>
            </div>
        </div>
      </div>

      
    </div>
  );
};

export default Preheader;
