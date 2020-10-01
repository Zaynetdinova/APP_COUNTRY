import React from 'react'
import './styles/CountriesList.scss'

export function CountriesList({filterCountry}) {
  return(
    <ul className='Countries-List list-group'>
      <div className='counter'>The number of countries found in the list: {filterCountry.length}</div>
      {filterCountry.map((country, index) => {
        return (
          <li className='list-group-item' key={index}>
            {country.name}
          </li>
        )
      })}
    </ul>
  )
}
