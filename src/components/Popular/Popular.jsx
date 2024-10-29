import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { useEffect } from 'react'
import Item from '../Item/Item'
function Popular() {   
    const API_KEY = '17f1ceadcf3767a35e55dd6204800668'
    const [popular, setPopular] = useState([]);

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => setPopular(data))
        
    }, []);

  return (
    <>
    <Header />
    <div>
        <ul className="movie-list">
        {popular.results?.map(movie => (
          <Item key={movie.id} img={movie.poster_path} name={movie.original_title}>
            <p>Item</p>
          </Item>
        ))}
        </ul>
    </div>
    </>
  )
}

export default Popular
