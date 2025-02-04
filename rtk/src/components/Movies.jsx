import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeMovie } from '../movieSlice'

const Movies = () => {
    const movies = useSelector((state)=> state.movies.movies)
    const dispatch = useDispatch(removeMovie())
    const deleteMovie=(id)=>{
        dispatch(removeMovie(id))
    }
  return (
    <div>
        <h1>Movies List</h1>
        {movies.map((movie)=>{
            return <div key={movie.id}>
                {movie.name} <button onClick={()=> deleteMovie(movie.id)}>delete</button>
                   </div>
        })}
    </div>
  )
}

export default Movies