import { useState } from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './configFirebase'

function App() {
  // register / sign up
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // Login / sign in
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    return setUser(currentUser);  
  })

  const SignUp = async () => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const user = userCredential.user;
      console.log(user);
      alert(user);
      alert(userCredential.user);

      console.log("user is : " + user);
    } catch(error){
      console.log(error)
    }
  }

  const login = async () => {
    try{
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;
      console.log(user);
      alert(user);
      alert(userCredential.user);

      console.log("user is : " + user);
    } catch(error){
      console.log(error)
    }
  }

  const Logout = async () => {
    await signOut(auth);
  }

  return (
    <div className="d-flex m-auto flex-column">
      <h1 className="text-center">Welcome to our website!</h1>
      <form action="" className="form-group align-items-center d-flex flex-column">
        <h3>Kullanıcı kayıt</h3>
        <input required className="mt-4 form-control w-50" placeholder="enter you email..." type="email" name="registerEmail_NAME" id="registerEmail_ID" onChange={(e) => {setRegisterEmail(e.target.value)}}/>
        <input required className="mt-4 form-control w-50" placeholder="enter you password..." type="password" name="registerPassword_NAME" id="registerPassword_ID" onChange={(e) => {setRegisterPassword(e.target.value)}} />
        <input onClick={SignUp} className="mt-4 btn btn-primary w-50" type="button" value="creatre acount" />
      </form>
      <form action="" className="form-group align-items-center d-flex flex-column">
        <h3>Login / sign up</h3>
        <input required className="mt-4 form-control w-50" placeholder="enter you email..." type="email" name="loginEmail_NAME" id="loginEmail_ID" onChange={(e) => {setLoginEmail(e.target.value)}}/>
        <input required className="mt-4 form-control w-50" placeholder="enter you password..." type="password" name="loginPassword_NAME" id="loginPassword_ID" onChange={(e) => {setLoginPassword(e.target.value)}}/>
        <input onClick={login} className="mt-4 btn btn-primary w-50" type="button" value="button" />
      </form>
      <p className="text-center alert">{user?.email}</p>
      <input type="button" className="btn btn-danger w-50 align-items-center m-auto" onClick={Logout} value="log out" />
    </div>
  )
}

export default App