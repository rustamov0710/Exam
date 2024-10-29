import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Item from '../Item/Item'
import Header from '../Header/Header'
function UpComing() {   
  const API_KEY = '17f1ceadcf3767a35e55dd6204800668'
  const [upComing, setUpComing] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setUpComing(data))
      
  }, []);

return (
  <>
  <Header />
  <div>
      <ul className="movie-list">
      {upComing.results?.map(movie => (
        <Item key={movie.id} img={movie.poster_path} name={movie.original_title}/>
      ))}
      </ul>
  </div>
  </>
)
}
export default UpComing
