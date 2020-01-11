import React, { useState, useEffect } from 'react'
import './Graphs.css'
import { Pie, Bar, defaults } from 'react-chartjs-2'

defaults.global.defaultFontFamily = 'Space Mono'
defaults.global.defaultFontColor = "white"

const Graphs = ({ data, city }) => {
  const [chartData, setChartData] = useState({})
  useEffect(() => {
    if (data) {
      let cheap = 0
      let low = 0
      let medium = 0
      let high = 0
      data.forEach(({ restaurant }) => {
        switch (restaurant.price_range) {
          case 1:
            cheap += 1
            break
          case 2:
            low += 1
            break
          case 3:
            medium += 1
            break

          case 4:
            high += 1
            break
          default:
        }
      })
      setChartData({
        labels: ['cheap', 'low', 'medium', 'expensive'],
        datasets: [
          {
            label: 'Population',
            data: [cheap, low, medium, high],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)'
            ],
            fontColor: 'white',
            defaultFontColor: 'white'
          }
        ]
      })
    }
    return () => { }
  }, [data])
  return (
    <div className={`Graphs`}>
      <div className={`Graphs__graph-wrapper`}>
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: `Prices of Food in ${city} - Bar Graph`,
              fontSize: 18,
              fontColor: 'white',
              padding: 20
            },
            legend: {
              display: false,
            },
            defaultFontColor: 'white'
          }}
        />
      </div>
      <div className={`Graphs__graph-wrapper`}>
        <Pie
          data={chartData}
          options={{
            title: {
              display: true,
              text: `Prices of Food in ${city} - Pie Chart`,
              fontSize: 18,
              fontColor: 'white',
              padding: 20
            },
            legend: {
              display: true,
              position: 'bottom'
            },
            defaultFontColor: 'white'
          }}
        />
      </div>

    </div>
  )
}

export default Graphs
