import React from 'react'
import { Fragment } from 'react';
import useFetch from '../../hooks/useFetch';
import './feature.css'

export default function Feature() {
  const { data, loading, error } = useFetch(
    'hotels/countByCity?cities=berlin,madrid,london'
  );
  
  return (
    <div className='feature'>
      {loading ? (
        'Loading Please wait...'
      ) : (
        <Fragment>
          <div className='featureItems'>
            <img
              className='featureImg'
              src='https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1'
              alt=''
            />
            <div className='featureTitles'>
              <h1>la roulotte de ciney</h1>
              <h2>{data[0]}Belgium,Ciney</h2>
            </div>
          </div>
          <div className='featureItems'>
            <img
              className='featureImg'
              src='https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1'
              alt=''
            />
            <div className='featureTitles'>
              <h1>Ranczo w Dolinie</h1>
              <h2>{data[1]}Poland,Kiazkowo</h2>
            </div>
          </div>
          <div className='featureItems'>
            <img
              className='featureImg'
              src='https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1'
              alt=''
            />
            <div className='featureTitles'>
              <h1>Tiny House Dreischwesternherz</h1>
              <h2>{data[2]}Germany,Trier</h2>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
