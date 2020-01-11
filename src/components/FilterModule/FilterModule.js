import React, { useState, useEffect } from 'react'
import './FilterModule.css'
import { priceDict } from '../../shared/priceDict'

const FilterModule = ({ data, filters, setFilters }) => {
  const [filterLists, setFilterLists] = useState({
    cuisine: [],
    type: [],
    price: []
  })
  const [dropdownStatus, setDropdownStatus] = useState({
    cuisine: false,
    type: false,
    price: false
  })

  // componentDidMount
  useEffect(() => {
    function closeDropdowns(e) {
      if (e.target.className !== 'FilterModule__filter-button') {
        toggleDropdown('')
      }
    }
    document.addEventListener('click', closeDropdowns)
    return () => {
      document.removeEventListener('click', closeDropdowns)
    }
  }, [])

  function toggleDropdown(filter) {
    setDropdownStatus({
      cuisine: false,
      type: false,
      price: false,
      [filter]: true
    })
  }

  function updateFilters(param, value) {
    setFilters({
      ...filters,
      [param]: value
    })
  }

  useEffect(() => {
    if (data) {
      let cuisinesSet = new Set()
      let typeSet = new Set()
      let priceSet = new Set()
      data.forEach(
        ({ restaurant: { cuisines, establishment, price_range } }) => {
          cuisinesSet.add(getCuisine(cuisines))
          priceSet.add(price_range)
          typeSet.add(
            establishment && establishment.length > 0 ? establishment[0] : null
          )
        }
      )
      setFilterLists({
        cuisine: Array.from(cuisinesSet),
        type: Array.from(typeSet),
        price: Array.from(priceSet)
      })
    }
    return () => { }
  }, [data])

  function getCuisine(cuisines) {
    let cuisine =
      cuisines.split(', ').length > 0 ? cuisines.split(', ')[0] : null
    return cuisine
  }

  const filterKeys = Object.keys(filterLists)

  let controllers = filterKeys.map(filterName => {
    return (
      <div className={`FilterModule__controller`}>
        <div className={`FilterModule__flex-column`}>
          <button
            className='FilterModule__filter-button'
            onClick={() => toggleDropdown(filterName)}>
            {filterName === 'price' ? priceDict[filters[filterName]] : filters[filterName]}
          </button>
          <ul
            className={`FilterModule__params-list ${
              dropdownStatus[filterName] ? 'expanded' : 'collapsed'
              }`}>
            <li
              key={filterName}
              onClick={() => updateFilters(filterName, filterName)}>
              {filterName}
            </li>
            {filterLists[filterName].map(item => {
              return (
                <li key={item} onClick={() => updateFilters(filterName, item)}>
                  {filterName === 'price' ? priceDict[item] : item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  })

  return (
    <div className='FilterModule'>
      <div className={`FilterModule__row`}>{controllers}</div>
    </div>
  )
}

export default FilterModule
