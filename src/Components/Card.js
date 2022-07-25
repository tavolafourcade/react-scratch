import React from 'react'

const Card = ({img}) => {
  return (
    <div key={img.id} >
      <img src={img.url} alt={img.id} style={{width: '400px'}}/>
    </div>
  )
}

export default Card