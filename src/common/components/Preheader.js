import { useState } from 'react';
import Link from 'next/link';
const Preheader = () => {
 

  return (
    <div>
      <header className='text-bg-dark'>
          <div className='container'>
            <div className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <div className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark'>  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40" height="32" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bi me-2 text-warning">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className='text-warning pe-3'>My Delivery Zip:</span>
                  {/* //TODO add type="text" readonly class="form-control-plaintext" for zipcode render */}
                  <form className='p'>
                    <input type="search" className="form-control form-control-dark form-control-sm" placeholder="Enter Zip Code" aria-label="Zip Code" />
                  </form>
                </div>  
                <div className="d-flex flex-wrap mb-0 pl-0 ">
                  <Link href='/location'>
                    <a className='pe-3 link-warning'>Find a Store</a>
                  </Link>
                  <span className='pe-3 text-warning'>|</span>
                  <Link href='tel:+18888883743'>
                    <a className='link-warning'>1-888 TUFF SHED</a>
                  </Link>
                </div>
              </div>
          </div>
      </header>


              


      
    </div>
  );
};

export default Preheader;
