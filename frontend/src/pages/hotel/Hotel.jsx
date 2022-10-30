import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faL,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserved/Reserve';

function Hotel() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModal] = useState(false)

  const { data, loading, error } = useFetch(`find/${id}`);

  const { date,options } = useContext(SearchContext);
  const {user} = useContext(AuthContext)

  // function for getting days from dates
  const MILISEC_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDiff(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILISEC_PER_DAY);
    return diffDays;
  }

const days = dayDiff(date[0].endDate, date[0].startDate);

  const handleOpen = i => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = direction => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = sliderNumber === 0 ? 4 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 4 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSlideNumber);
  };

  const handleClick = (e) => {
    e.preventDefault();
      if(user){
        setOpenModal(true)
      }else{
        Navigate('/login')
      }
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'Loading Please wait'
      ) : (
        <div className='hotelContainer'>
          {open && (
            <div className='slider'>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='close'
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className='arrow'
                onClick={() => handleMove('r')}
              />
              <div className='sliderWrapper'>
                <img src={data.photos[sliderNumber]} alt='' />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className='arrow'
                onClick={() => handleMove('r')}
              />
            </div>
          )}
          <div className='hotelWrapper'>
            <button className='bookNow' onClick={handleClick}>Reserve or Book Now!</button>
            <h1 className='hotelTitle'>{data.name}</h1>
            <div className='hotelAddress'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Kattappana, Idukki, Kerala</span>
            </div>
            <span className='hotelDistance'>
              Excellent location - {data.distance} from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over ₹{data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className='hotelImages'>
              {data.photos?.map((photo, i) => (
                <div className='hotelImageWrapper' key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=''
                    className='hotelImg'
                  />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>{data.title}</h1>
                <p className='hotelDesc'>{data.desc}</p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>perfect for to stay</h1>
                <span>
                  Treebo Trip Sparrow'S Suite & Resorts is located in
                  Kattappana, 2.1 km from Kattappana and 8.2 km from Vandanmedu
                </span>
                <h2>
                  <b>₹{days * data.cheapestPrice * options.room}</b> ({days}{' '}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );

}

export default Hotel;



 // const photos = [
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/372155897.jpg?k=e2e8180d39b6c0229e8740ebff7dbc30ee3c85b6ba101646cc3f50ab70276be8&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/372159329.jpg?k=c0e6fcdf29ff15d0a96eff7cbd5a1096133580ddc95bec18857e494fd2b7a496&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/372159423.jpg?k=7ac7c4f260a503119cb087df3ac66cb21b151164dd071cc386451190a6a7e704&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/372155894.jpg?k=54c39cd8e8873d7a4cafab56ec12edb88f5e33f8c40725734668cf62d8f67d33&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/372155887.jpg?k=0f231a9e54edef83b2551da36849131258148b37844387b5e11ccd5b1197fa0f&o=&hp=1',
  //   },
  // ];