import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap';



const Preheader = () => {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const confirm_modal = () => {
        console.log('modal is working ...')
        setShow(false)
    }
  return (
    <>
    <section className='preheader'>
      <header className='bg-dark text-white'>
          <div className='container'>
            <div className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <div className='d-flex align-items-center mb-3 mb-md-0 me-md-auto '>  
                  <FontAwesomeIcon icon={["fas", "location-dot"]} size="1x" />
                  <span className=' pe-3'>My Delivery Zip:</span>
                  {/* //TODO consider location "modal" instead of inline form */}
                  <a className="nav-link" onClick={handleShow} href="#">Enter Zip Code</a>
                    {/* <form className='p'>
                      <input type="search" className="form-control form-control-dark form-control-sm" placeholder="Enter Zip Code" aria-label="Zip Code" />
                    </form> */}
                  </div>  
                  <div className="d-flex flex-wrap mb-0 pl-0 ">
                    <Link href='/location'>
                      <a className='pe-3 text-white text-decoration-none'>Find a Store</a>
                    </Link>
                    <span className='pe-3 '>|</span>
                    <Link href='tel:+18888883743'>
                      <a className='text-decoration-none'>1-888 TUFF SHED</a>
                    </Link>
                  </div>
              </div>
          </div>
        </header>
      </section>
      <Modal show={show} onHide={handleClose}  keyboard="false">
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are You Sure You Want This!.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={ confirm_modal  }>
        Yes
        </Button>
      </Modal.Footer>
    </Modal>

      </>


  );
};

export default Preheader;
