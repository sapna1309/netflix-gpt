import React, { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store)=>store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
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


  return (
    <div className="fixed justify-between flex px-4 z-10 py-1 left-0 top-0 right-0 bg-gradient-to-b from-black">
      <img src={LOGO} className="w-44" alt="logo" />
      {user && (
        <div className="flex items-center pr-4 gap-x-4">
          <img src={USER_AVATAR} className="w-8 h-8" alt="user-avatar" />
          <button onClick={handleSignOut} className="bg-red-600 px-3 py-2 rounded-sm font-semibold w-full text-xs text-white">
            SIGN OUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
