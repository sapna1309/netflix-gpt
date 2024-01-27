import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="w-full">
      <Header />
      <div className="w-[100%] h-screen">
        <img src={LOGIN_BG_URL} className="w-screen h-screen" alt="bg-url" />
      </div>
      <form
        action=""
        className="absolute  w-3/12 rounded-md bg-opacity-80 top-1/2 -translate-y-1/2 left-1/2 bg-black p-14 -translate-x-1/2"
      >
        <h1 className="text-white text-3xl font-bold pb-4">{isSignUp?'Sign Up':'Sign In'}</h1>
        {isSignUp && <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-2 w-full focus:bg-opacity-60 rounded-sm border border-gray-100  bg-gray-700"
        />}
        <input
          type="email"
          placeholder="Email"
          className="p-3 my-2 w-full focus:bg-opacity-60 rounded-sm border border-gray-100  bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full focus:bg-opacity-60 rounded-sm border border-gray-100 bg-gray-700"
        />
        <button className="bg-red-600 p-2 my-4 rounded-md font-semibold w-full text-white">
        {isSignUp?'Sign Up':'Sign In'}
        </button>
        {isSignUp ? (
          <p className="text-gray-400 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
            Already registered?{" "}
            <span className="font-semibold text-white text-md">
              Sign in now.
            </span>
          </p>
        ) : (
          <p className="text-gray-400 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
            New to Netflix?{" "}
            <span className="font-semibold text-white text-md">
              Sign up now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
