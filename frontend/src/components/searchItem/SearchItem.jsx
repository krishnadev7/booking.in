import React from 'react'
import './searchItem.css'

function SearchItem() {
  return (
    <div className='searchItem'>
      <img
        className='siImg'
        src='https://cf.bstatic.com/xdata/images/hotel/square600/372155897.webp?k=c53c46a760623178c407d818db9ad5b3bcd7eb6c3dcac11a35cb345da7a9970c&o=&s=1'
        alt=''
      />
      <div className='siDesc'>
        <h1 className='siTitle'>
          Treebo Trip Sparrow'S Suite & ResortsOpens in new window
        </h1>
        <span className='siDistance'>1.3 miles from Kattappana</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>Entire studio + 1 bathroom </span>
        <span className='siCancelOp'>free cancellation</span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this with great price today
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>₹123</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem