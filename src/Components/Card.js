import React from 'react'

const Card = ({id, url}) => {
  return (
    <div key={id} >
      <img src={url} alt={id} style={{width: '400px'}}/>
    </div>
  )
}

export default Card