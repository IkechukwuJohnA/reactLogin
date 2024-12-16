import { useState } from "react";


function SignUp({CiUser, CiLock, CiVoicemail,  formHandle}) {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    function handleSignup(e){
        e.preventDefault();

        if(!user || !email || !password) return;

        console.log(user, email, password)
        setUser('');
        setEmail('')
        setPassword('');
    }

    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <input type="text" placeholder="Enter your Username" onChange={(e) => setUser(e.target.value)} value={user} />
                    <CiUser className = "icon user"/>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <CiVoicemail className = "icon email"/>
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <CiLock className = "icon password"/>
                </div>

                <button onSubmit={handleSignup}>Sign Up</button>

            </form>
            <p onClick={() => formHandle('Login')}>Already have an account please signIn</p>

        </div>
    )

}

export default SignUp;