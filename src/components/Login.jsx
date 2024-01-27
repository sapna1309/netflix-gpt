import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_BG_URL } from "../utils/constants";
import { useFormik } from "formik";
import { signInSchema, signUpSchema } from "../schema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const signUpInitialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const signInInitialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    values: signInValues,
    isSubmitting: signInIsSubmitting,
    touched: signInTouched,
    errors: signInErrors,
    handleBlur: signInHandleBlur,
    handleSubmit: signInHandleSubmit,
    handleChange: signInHandleChange,
  } = useFormik({
    initialValues: signInInitialValues,
    validationSchema: signInSchema,
    validateOnChange: true,
    validateOnBlur: false,
    // By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values, action) => {
      // console.log("🚀 values", values);
      signInWithEmailAndPassword(auth, values?.email, values?.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          navigate("/browse");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            setErrorMessage("Invalid credentials, please try again !");
          }
        });
      //to get rid of all the values after submitting the form
      action.resetForm();
    },
  });

  const {
    values: signUpValues,
    isSubmitting: signUpIsSubmitting,
    touched: signUpTouched,
    errors: signUpErrors,
    handleBlur: signUpHandleBlur,
    handleSubmit: signUpHandleSubmit,
    handleChange: signUpHandleChange,
  } = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    // By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values, action) => {
      //console.log("🚀 values", values);
      createUserWithEmailAndPassword(auth, values?.email, values?.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: values?.name,
            photoURL: "https://avatars.githubusercontent.com/u/110045725?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("Email already in use, please try again !");
          }
        });
      //to get rid of all the values after submitting the form
      action.resetForm();
    },
  });

  return (
    <div className="w-full">
      <Header />
      <div className="w-[100%] h-screen">
        <img src={LOGIN_BG_URL} className="w-screen h-screen" alt="bg-url" />
      </div>
      {isSignUp ? (
        <form
          action=""
          onSubmit={signUpHandleSubmit}
          className="absolute w-full sm:w-3/4 md:w-3/12 rounded-md bg-opacity-80 top-24 md:top-1/2 md:-translate-y-1/2 left-1/2 bg-black p-14 -translate-x-1/2"
        >
          {errorMessage && (
            <p className="text-red-500 text-sm -mt-2 mb-4">{errorMessage}</p>
          )}
          <h1 className="text-white text-3xl font-bold pb-4">SIgn Up</h1>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={signUpValues?.name}
            onChange={signUpHandleChange}
            onBlur={signUpHandleBlur}
            autoComplete="off"
            className="p-3 my-2 w-full focus:bg-opacity-60 rounded-sm border border-gray-500  bg-gray-700"
          />
          {signUpErrors?.name && signUpTouched?.name ? (
            <p className="text-red-500 text-xs -mt-2">{signUpErrors?.name}</p>
          ) : null}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={signUpValues?.email}
            onChange={signUpHandleChange}
            onBlur={signUpHandleBlur}
            className="p-3 my-2 w-full border focus:bg-opacity-60 rounded-sm  border-gray-500  bg-gray-700"
          />
          {signUpErrors?.email && signUpTouched?.email ? (
            <p className="text-red-500 text-xs -mt-2">{signUpErrors?.email}</p>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signUpValues?.password}
            onChange={signUpHandleChange}
            onBlur={signUpHandleBlur}
            className="p-3 my-2 w-full focus:bg-opacity-60 rounded-sm border border-gray-500 bg-gray-700"
          />
          {signUpErrors?.password && signUpTouched?.password ? (
            <p className="text-red-500 text-xs -mt-2">
              {signUpErrors?.password}
            </p>
          ) : null}
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={signUpValues?.confirm_password}
            onChange={signUpHandleChange}
            onBlur={signUpHandleBlur}
            className="p-3 my-2 w-full focus:bg-opacity-60 rounded-sm border border-gray-500  bg-gray-700"
          />
          {signUpErrors?.confirm_password && signUpTouched?.confirm_password ? (
            <p className="text-red-500 text-xs -mt-2">
              {signUpErrors?.confirm_password}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={signUpIsSubmitting}
            className="bg-red-600 p-2 my-4 rounded-md font-semibold w-full text-white"
          >
            Sign Up
          </button>
          <p
            className="text-gray-400 cursor-pointer"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMessage("");
            }}
          >
            Already registered?{" "}
            <span className="font-semibold text-white text-md">
              Sign in now.
            </span>
          </p>
        </form>
      ) : (
        <form
          action=""
          onSubmit={signInHandleSubmit}
          className="absolute w-full sm:w-3/4 md:w-3/12 rounded-md bg-opacity-80 top-40 md:top-1/2 md:-translate-y-1/2 left-1/2 bg-black p-14 -translate-x-1/2"
        >
          {errorMessage && (
            <p className="text-red-500 text-sm -mt-2 mb-4">{errorMessage}</p>
          )}
          <h1 className="text-white text-3xl font-bold pb-4">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={signInValues?.email}
            onChange={signInHandleChange}
            onBlur={signInHandleBlur}
            className="p-3 my-2 w-full border focus:bg-opacity-60 rounded-sm  border-gray-500  bg-gray-700"
          />
          {signInErrors?.email && signInTouched?.email ? (
            <p className="text-red-500 text-xs -mt-2">{signInErrors?.email}</p>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signInValues?.password}
            onChange={signInHandleChange}
            onBlur={signInHandleBlur}
            className="p-3 my-2 w-full focus:bg-opacity-60 rounded-sm border border-gray-500 bg-gray-700"
          />
          {signInErrors?.password && signInTouched?.password ? (
            <p className="text-red-500 text-xs -mt-2">
              {signInErrors?.password}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={signInIsSubmitting}
            className="bg-red-600 p-2 my-4 rounded-md font-semibold w-full text-white"
          >
            Sign In
          </button>
          <p
            className="text-gray-400 cursor-pointer"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMessage("");
            }}
          >
            New to Netflix?{" "}
            <span className="font-semibold text-white text-md">
              Sign up now.
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
