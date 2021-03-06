import React, { useState, useEffect } from 'react'
import './ZipForm.css'
import axios from 'axios'
import Spinner from '../../shared/UI/Spinner'
import { ZOMATO_API_KEY } from '../../keys/keys'

const ZipForm = ({ setAddressData }) => {
  const [zipInput, setZipInput] = useState(94301)
  const [loading, setLoading] = useState(false)

  // componentDidMount
  useEffect(() => {
    document.querySelector('.ZipForm__input').focus()
    return () => {}
  }, [])

  function inputHandler (e) {
    let value = e.target.value
    if (value.toString().length <= 5) {
      setZipInput(value)
    }
  }

  const fetchAddressFromZipcode = async zipCode => {
    setLoading(true)
    return axios
      .get(
        'https://www.zipcodeapi.com/rest/' +
          ZOMATO_API_KEY +
          '/info.json/' +
          zipCode +
          '/degrees'
      )
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getData = async e => {
    e.preventDefault()
    let locationData = await fetchAddressFromZipcode(zipInput)
    if (locationData) {
      setAddressData(locationData)
    }
  }

  return (
    <form className='ZipForm bounceInRight'>
      <Spinner loading={loading} />
      <input
        className='ZipForm__input'
        type='number'
        placeholder='ZipCode'
        value={zipInput}
        onChange={e => inputHandler(e)}
      />
      <button className='ZipForm__button' onClick={e => getData(e)}>
        <i className='fa fa-search' aria-hidden='true'></i>
      </button>
    </form>
  )
}

export default ZipForm
