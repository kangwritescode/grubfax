import React, { useState, useEffect } from 'react'
import './Landing.css'
import ZipForm from './ZipForm/ZipForm'
import 'react-awesome-button/dist/styles.css'

const Landing = ({ setAddressData, setShowDataView }) => {
  return (
    <div className='Landing' onAnimationEnd={() => setShowDataView(true)}>
      <h1 className='Landing__header'>GrubFax</h1>
      <h4 className='Landing__sub-header'>Food Data Near You</h4>
      <ZipForm setAddressData={setAddressData} />
    </div>
  )
}

export default Landing
