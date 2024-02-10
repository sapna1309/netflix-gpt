import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    
const dispatch = useDispatch();

const getNowPlayingMovies = async () => {
  try {
    const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const moviesData = await movies.json();
  //  console.log("movies",moviesData);
    dispatch(addTopRatedMovies(moviesData?.results))
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  getNowPlayingMovies();
},[])

};

export default useTopRatedMovies;