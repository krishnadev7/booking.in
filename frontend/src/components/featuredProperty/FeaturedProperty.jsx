import React from 'react'
import './featuredProperty.css'

function FeaturedProperty() {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1'
          alt=''
          className='fpImage'
        />
        <span className='fpName'>6 Continents Apartments</span>
        <span className='fpCity'>Prague</span>
        <span className='fpPrice'>Starting from ₹6,828</span>
        <div className='fpRating'>
          <button>8.5</button>
          <span>Very Good</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/34405073.webp?k=ca1663aa4fabefe87287d7385b6f2bb62d556220f3ba92248c411120a2f41118&o=&s=1'
          alt=''
          className='fpImage'
        />
        <span className='fpName'>Sugar Loft ApartmentsOpens in new window</span>
        <span className='fpCity'>Rio de Janeiro</span>
        <span className='fpPrice'>Starting from ₹3,793</span>
        <div className='fpRating'>
          <button>9.0</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/32087410.webp?k=dc00ec6ae768aed9d2d365436be31494514efca36a0479443c6764d32c589848&o=&s=1'
          alt=''
          className='fpImage'
        />
        <span className='fpName'>
          Luxury Apartments KlaraOpens in new window
        </span>
        <span className='fpCity'>Split</span>
        <span className='fpPrice'>Starting from ₹30,527</span>
        <div className='fpRating'>
          <button>9.6</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/102475532.webp?k=f18fe358b412a26139359ed87f5c3d4d820a93684f7d03eccdd7db707cdf29d1&o=&s=1'
          alt=''
          className='fpImage'
        />
        <span className='fpName'>Le SCALIERO</span>
        <span className='fpCity'>Riquier,Nice</span>
        <span className='fpPrice'>Starting from ₹26,831</span>
        <div className='fpRating'>
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperty