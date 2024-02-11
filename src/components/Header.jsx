import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed justify-between flex px-4 z-20 py-1 left-0 top-0 right-0 bg-gradient-to-b from-black">
      <img src={LOGO} className="w-44" alt="logo" />
      {user && (
        <div className="flex items-center pr-4 gap-x-4">
          {showGptSearch && (
            <select   onChange={handleLanguageChange} className="px-3 py-2 rounded-sm font-semibold text-xs text-red-600 hover:bg-opacity-70">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptClick}
            className="bg-red-600 px-3 py-2 rounded-sm font-semibold text-xs text-white hover:bg-opacity-70"
          >
           {showGptSearch?"GPT Search":"Home Page"}
          </button>
          <img src={USER_AVATAR} className="w-8 h-8" alt="user-avatar" />
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-3 py-2 rounded-sm font-semibold text-xs text-white"
          >
            SIGN OUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
