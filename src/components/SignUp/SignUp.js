import { useState } from 'react';
import './SignUp.css';
export default function SignUp({fclient})
{
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [confirmpass,setConfirmPass]=useState("");
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(pass.length<6)
        {
            alert("Password must be at least 6 characters long.");
        }
        else if(!pass.includes("#")&&!pass.includes("$"))
        {
            alert("Password must contain at least one number and one special character (# or $).");
        }
        else if (!/[0-9]/.test(pass)) {
            alert("Password must contain at least one number.");
        }
        else if(!/[a-zA-Z]/.test(pass))
        {
            alert("Password must contain at least one letter.");
        }
        else if(pass!==confirmpass)
        {
            alert("Password and Confirm Password must match");
        }
        else{
            alert("Account created successfully!🎉");
            fclient(true);
            localStorage.setItem("UserName",user);
            localStorage.setItem("Email",email);
            localStorage.setItem("Password",pass);
        }
    }

    return(
        <section className='log'>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="user">User Name</label>
                    <input id="user" type="text" onChange={(e)=>setUser(e.target.value)} value={user} required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>
                <div>
                    <label htmlFor="pass">PassWord</label>
                    <input id="pass" type="password" onChange={(e)=>setPass(e.target.value)} value={pass}required/>
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Pass</label>
                    <input id="confirm" type="password" onChange={(e)=>setConfirmPass(e.target.value)} value={confirmpass} required/>
                </div>
                <input className='butt' type="submit"/>
            </form>
        </section>
    )
}
