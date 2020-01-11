import React, { useState, useEffect } from 'react'
import './Spinner.css'

const Spinner = ({ loading }) => {
  return (
    <div
      className={`ZipForm__spinner-container ${
        loading ? 'ZipForm__spinner-container--show' : null
      }`}
    >
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
