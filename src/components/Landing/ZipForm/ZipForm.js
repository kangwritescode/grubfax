import React, { useState, useEffect } from 'react'
import './ZipForm.css'
import axios from 'axios'

const ZipForm = ({ setAddressData }) => {


  const [zipInput, setZipInput] = useState(94301)

  useEffect(() => {
    document.querySelector('.ZipForm__input').focus()
    return () => {

    };
  }, []);

  function updateInput(e) {
    let value = e.target.value
    if (value.toString().length <= 5) {
      setZipInput(value)
    }
  }

  const fetchAddressFromZipcode = async zipCode => {
    return axios
      .get(
        'https://www.zipcodeapi.com/rest/' +
        'js-zF10dQxfazt7cMgYnzZphQk7jEzBwBYPb781ubkqZokAXEvUzbinxdGT5rzVrkmB' +
        '/info.json/' +
        zipCode +
        '/degrees'
      )
      .then(res => {
        console.log(res.data)
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
    <form className='ZipForm'>
      <input
        className='ZipForm__input'
        type='number'
        placeholder='ZipCode'
        value={zipInput}
        onChange={e => updateInput(e)}
      />
      <button className='ZipForm__button' onClick={e => getData(e)}>
        <i className='fa fa-search' aria-hidden='true'></i>
      </button>
    </form>
  )
}

export default ZipForm
