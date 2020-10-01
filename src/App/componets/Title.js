import React from 'react'
import './styles/Title.scss'

export function Title() {
  const title = ['C', 'O', 'U', 'N', 'T', 'R', 'Y']
  return (
    <div className='Title'>
      {title.map((i, index) => {
        return (
          <span key={index}>{i}</span>
        )
      })}
    </div>
  )
}
