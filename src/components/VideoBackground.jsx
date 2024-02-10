import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo);
useMovieTrailer(movieId);

return (
    <div className="bg-white border-0 -mt-28 border-red-600 box-border">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
