/* eslint-disable no-loop-func */
import React, { useState, useEffect } from 'react'
import './App.css'
import Landing from './components/Landing/Landing'
import Background from './components/Background/Background'
import axios from './axios'
import DataView from './components/DataView/DataView'

function App () {
  // data states:
  //     address data fetched from ZipCodeApi
  //     restaurant data fetched form ZomatoAPI
  const [addressData, setAddressData] = useState(null)
  const [restuarantData, setRestuarantData] = useState(null)
  const [showDataView, setShowDataView] = useState(false)
  const [filters, setFilters] = useState({
    cuisine: 'cuisine',
    type: 'type',
    price: 'price'
  })



  // This middleware...
  //     1) fetches Zomato data when restaurant data is received
  //     2) shows data view when restaurant data is received
  useEffect(() => {
    
    const fetchZomatoData = async (lat, lng) => {
      await axios
        .get(`v2.1/search?lat=${lat}&lon=${lng}&start=${1}&count=20`)
        .then(data => setRestuarantData(data.data.restaurants))
        .catch(err => console.log(err))
    }

    if (addressData && !restuarantData) {
      let { lat, lng } = addressData
      fetchZomatoData(lat, lng)
    }
    if (restuarantData) {
      let landing = document.querySelector('.Landing')
      if (landing) {
        landing.classList.add('zoomOut')
      }
      setTimeout(() => {
        setShowDataView(true);
      }, 1000)
    }
  }, [addressData, restuarantData])


  // This app has two views:
  let view = showDataView ? (
    <DataView
      addressData={addressData}
      restuarantData={restuarantData}
      filters={filters}
      setFilters={setFilters}
    />
  ) : (
    <Landing
      setAddressData={setAddressData}
    />
  )

  return (
    <div className='App'>
      <Background>{view}</Background>
    </div>
  )
}

export default App
