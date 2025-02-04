import React,{useState} from 'react'
import { addMovie,removeMovie } from '../movieSlice';
import { useDispatch } from 'react-redux';

const MovieInput = () => {
    const dispatch = useDispatch()
    const [newMovie, setNewMovie] = useState("");
    const handleAddMovie = ()=>{
        if(newMovie){
            dispatch(addMovie(newMovie))
            setNewMovie("")
        }
    }
  return (
    <div>
        <input onChange={(e)=>{setNewMovie(e.target.value)}} type="text" name="" value={newMovie} />
        <button onClick={handleAddMovie}>add movie</button>
    </div>
  )
}

export default MovieInput