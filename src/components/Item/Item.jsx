import React from 'react'

const Item = (props) => {
    const img_url = `https://image.tmdb.org/t/p/original${props.img}`
  return (
    <li className="item">
        <h2>{props.name}</h2>
        <img className='img' src={img_url}/>
    </li>
  )
}

export default Item