import { useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { CiUser, CiLock, CiVoicemail} from "react-icons/ci";  //i can as well import the icon directly to the 
                                                              //SignUp Or SignIn module with the full script =
                                                              //import {CiVoicemail} from "react-icons/ci"     


function App() {
  const [form, setForm] = useState('Login');

  return(
    <>
    {form === 'Login' ? ( <SignIn CiUser={CiUser} CiLock={CiLock} formHandle={setForm} /> ) :
     ( <SignUp CiUser={CiUser} CiLock={CiLock} CiVoicemail={CiVoicemail} formHandle={setForm} /> ) }
    </>
  )
  
  //return ( <SignIn CiUser={CiUser} CiLock={CiLock} />
  //return ( <SignUp CiUser={CiUser} CiLock={CiLock} CiVoicemail={CiVoicemail} /> )
}

export default App;
