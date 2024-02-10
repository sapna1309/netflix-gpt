import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecondryContainer = () => {
  const movies = useSelector((store)=>store?.movies);
  return (
    <div className='bg-black '>
      <div className='-mt-48 z-10 relative'>
      <MoviesList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
      <MoviesList title={'Upcoming'} movies={movies?.upcomingMovies} />
      <MoviesList title={'Popular'} movies={movies?.popularMovies} />
      <MoviesList title={'Top Rated'} movies={movies?.topRatedMovies} />
     
      </div>
     
    </div>
  )
}

export default SecondryContainer;