import { useState } from "react";


function SignIn({CiUser, CiLock,  formHandle}) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('');

   

    function handleLogin(e){
        e.preventDefault();

        if(!user || !password) return;
        
        console.log(user, password)
        setUser('');
        setPassword('');
    }
    

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <input type="text" placeholder="Enter your email or Username" onChange={(e) => setUser(e.target.value)} value={user} />
                    <CiUser className = "icon user"/>
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)} value={password} />
                    <CiLock className = "icon password"/>
                </div>

                <button onClick={handleLogin}>Sign In</button>

            </form>
            <p onClick={() => formHandle('Signup')}>Don't have account please signup</p>

        </div>
    )

}

export default SignIn;