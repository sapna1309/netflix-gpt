import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo);
useMovieTrailer(movieId);

return (
    <div className="bg-white border boder-red-600">
      <iframe
      className="w-screen -mt-28 aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
