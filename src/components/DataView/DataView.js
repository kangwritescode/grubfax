import React, { useState, useEffect } from 'react'
import './DataView.css'
import DataTable from '../DataTable/DataTable'
import Graphs from '../Graphs/Graphs'
import FilterModule from '../FilterModule/FilterModule'

const DataView = ({ restuarantData, addressData, filters, setFilters }) => {
  const [data, setData] = useState([])

  
  useEffect(() => {
    if (restuarantData) {
      setData(restuarantData)
    }
    return () => {}
  }, [restuarantData])

  function filterRestaurantData (data) {
    if (filters.cuisine !== 'cuisine') {
      data = data.filter(({ restaurant }) => {
        let cuisine =
          restaurant['cuisines'].split(', ').length > 0
            ? restaurant['cuisines'].split(', ')[0]
            : null
        return filters.cuisine === cuisine
      })
    }
    if (filters.type !== 'type') {
      data = data.filter(({ restaurant: { establishment } }) => {
        let type =
          establishment && establishment.length > 0 ? establishment[0] : null
        return type === filters.type
      })
    }
    if (filters.price !== 'price') {
      data = data.filter(
        ({ restaurant }) => filters.price === restaurant.price_range
      )
    }
    return data
  }

  let filteredData = filterRestaurantData(data)

  return (
    <div className='DataView'>
      <header>
        <h1 className='DataView__header'>GrubFax - {addressData.city}</h1>
        <p className='DataView__info'>
          Here are some food facts for the first 20 restaurants returned by the{' '}
          <span id='zomato'>Zomato</span> API for the ZipCode provided, starting
          with a table overview.
        </p>
      </header>
      <label id='filter-label'>Filter: </label>
      <FilterModule data={data} filters={filters} setFilters={setFilters} />
      <DataTable data={filteredData} />
      <Graphs data={filteredData} city={addressData.city}></Graphs>
    </div>
  )
}

export default DataView
