import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {

  props; // to avoid linting error

  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(Response => {
        console.log(Response.user.uid);
        navigate('/');
    }) .catch(Error => {
        console.log(Error);
        setAuthing(false);
    })
  }

  return (
    <>
      <p>login page</p>
      <button onClick={() => signInWithGoogle()} disabled={authing} className="btn btn-primary">sign in with google</button>
    </>
  )
};

export default LoginPage
