import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../Header/Header'
import Item from '../Item/Item'
function TopRated() {   
  const API_KEY = '17f1ceadcf3767a35e55dd6204800668'
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setTopRated(data))
      
  }, []);

return (
  <>
  <Header />
  <div>
      <ul className="movie-list">
      {topRated.results?.map(movie => (
        <Item key={movie.id} img={movie.poster_path} name={movie.original_title}/>
      ))}
      </ul>
  </div>
  </>
)
}

export default TopRated
