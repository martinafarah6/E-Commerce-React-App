import { useState } from 'react';
import './SignIn.css';
export default function SignIn({fclient})
{
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email!==localStorage.getItem("Email"))
        {
            alert("Please enter a valid email address");
        }
        else if(pass!==localStorage.getItem("Password"))
        {
            alert("Incorrect password");
        }
        else{
            alert(`Welcome back, ${localStorage.getItem("UserName")}! 👋`);
            fclient(true);
        }

    }
    return(
        <section id="sign">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input id="pass" type="password" onChange={(e)=>setPass(e.target.value)} value={pass}/>
                </div>
                <input className="butt" type="submit"/>
            </form>
        </section>
    )
}
