import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGIN_BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="w-[100%] h-screen absolute top-0 -z-10">
        <img src={LOGIN_BG_URL} className="w-screen h-screen" alt="bg-url" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;