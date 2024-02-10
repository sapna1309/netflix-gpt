import React from 'react'
import MovieCard from './MovieCard';
import '../moviesList.css';

const MoviesList = ({title,movies}) => {
  return (
    <div className='pl-12 text-white'>
      <h1 className='text-2xl py-4'>{title}</h1>
      <div className='scrollbar-box'>
     <div className='flex'>
     {movies && movies.length && movies.map((movie)=> <MovieCard key={movie?.id} {...movie} />)}
     </div>
      </div>
      
     
    </div>
  )
}

export default MoviesList;