import { useDispatch } from "react-redux";
import { addNowPlayingMvies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    
const dispatch = useDispatch();

const getNowPlayingMovies = async () => {
  try {
    const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const moviesData = await movies.json();
  //  console.log("movies",moviesData);
    dispatch(addNowPlayingMvies(moviesData?.results))
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  getNowPlayingMovies();
},[])

};

export default useNowPlayingMovies;