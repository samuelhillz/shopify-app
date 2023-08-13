import React from 'react'
import './Login.css'
import { FcGoogle,  } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { ToastContainer,toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, logOut } from '../../redux/shop';
import { useNavigate } from 'react-router-dom';
import { BsFilePersonFill } from 'react-icons/bs';



const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(auth)
        signInWithPopup(auth, provider)
          .then((result) => {
           
            const user = result.user;
            console.log(user)
            dispatch(addUser({
                _id:user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            }));
            setTimeout(()=>{
                navigate('/')
            }, 1500);
           
          })
          .catch((error) => {
            // Handle Errors here.
            console.log(error)
          });

    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            toast.success('Log Out successfullty')
            dispatch(logOut());
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className="login">
      <div className="login-wrapper">
        <BsFilePersonFill size={155} color=" rgb(25, 4, 58)" />

        <div onClick={handleLogin} className="sign-in">
          <FcGoogle size={35} />
          <p>Sign in with Google</p>
        </div>
        <button onClick={handleSignOut}>Sign out</button>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login