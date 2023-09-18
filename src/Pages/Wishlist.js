import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';

const Wishlist = () => {
  return (
    <>
      <Meta title='Wishlist' />
      <BreadCrumb title='Wishlist' />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <img src="images/watch.jpg" alt="cross" className='position-absolute cross img-fluid'/>
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
              </div>
              <div className="py-3">
                <h5 className="title"> Sumsung Galaxy A21s</h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <img src="images/watch.jpg" alt="cross" className='position-absolute cross img-fluid'/>
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
              </div>
              <div className="py-3">
                <h5 className="title"> Sumsung Galaxy A21s</h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <img src="images/watch.jpg" alt="cross" className='position-absolute cross img-fluid'/>
              <div className="wishlist-card-image">
                <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
              </div>
              <div className="py-3">
                <h5 className="title"> Sumsung Galaxy A21s</h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Wishlist