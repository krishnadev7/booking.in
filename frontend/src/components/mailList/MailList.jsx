import React from 'react'
import './mailList.css'

function MailList() {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Subscribe to see Secret Deals</h1>
      <span className='mailDesc'>Prices drop the second you sign up!</span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='You Email' />
        <button>Sign me up!</button>
      </div>
    </div>
  );
}

export default MailList