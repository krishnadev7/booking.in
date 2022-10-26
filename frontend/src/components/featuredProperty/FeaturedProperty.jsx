import React, { Fragment } from 'react';
import useFetch from '../../hooks/useFetch';
import './featuredProperty.css';

function FeaturedProperty() {
  const { data, loading, error } = useFetch('hotels?featured=true&limit=4');
  return (
    <div className='fp'>
      {loading ? (
        'Loading Please wait...'
      ) : (
        <Fragment>
          {data.map((item) => (
            <div className='fpItem'>
            <img
              src={item.photos[0]}
              alt=''
              className='fpImage'
              />
            <span className='fpName'>{item.name}</span>
            <span className='fpCity'>{item.city}</span>
            <span className='fpPrice'>Starting from ₹{item.cheapestPrice}</span>
            {item.rating && <div className='fpRating'>
              <button>{item.rating}</button>
              <span>Very Good</span>
            </div>}
          </div>
             ))}
        </Fragment>
      )}
    </div>
  );
}

export default FeaturedProperty;
