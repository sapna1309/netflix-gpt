import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        try {
          const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
          );
          const videos = await data.json();
          const trailers = videos.results.filter(
            (video) => video.type === "Trailer"
          );
          const trailer = trailers.length? trailers[0] : videos.results[0];
          dispatch(addTrailerVideo(trailer));
          //console.log("videos", trailers);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getMovieVideos();
      }, []);
}

export default useMovieTrailer;