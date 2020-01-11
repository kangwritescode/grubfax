import React from 'react'
import './DataTable.css'
import { priceDict } from '../../shared/priceDict'

const DataTable = ({ data }) => {
  return (
    <div className={`DataTable`}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>cuisine</th>
            <th>rating</th>
            <th>type</th>
            <th>price</th>
            <th>reviews_count</th>
            <th>cost_for_two</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ restaurant }) => {
            return (
              <tr>
                <th>{restaurant.name}</th>
                <td>
                  {restaurant['cuisines'].split(', ').length > 0
                    ? restaurant['cuisines'].split(', ')[0]
                    : null}
                </td>
                <td>{restaurant.user_rating.aggregate_rating}</td>
                <td>{restaurant.establishment}</td>
                <td>{priceDict[restaurant.price_range]}</td>
                <td>{restaurant.all_reviews_count}</td>
                <td>{restaurant.average_cost_for_two}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
