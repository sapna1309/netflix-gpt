import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({poster_path}) => {
  return (
    <div className='text-white w-[220px] h-[150px] mr-2 object-cover'>
        <img src={IMG_CDN_URL+poster_path} className='w-full h-full rounded-md' alt="movie-card" />
    </div>
  )
}

export default MovieCard;