import React from "react";
import "./landing.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Appcontext} from "./App"


    

function Landing(){
    const {setUsername}=useContext(Appcontext)
    return(
        <div>
        <div className="main">
           <div className="phones">
               <img src="./phones-removebg-preview.png"/>
            </div> 
            <div className="login">
               <div className="app"><img src="./logospot-removebg-preview.png" id="logo"/><h3>SPOTIFY</h3></div> 

                <div className="pars">
                    <p>LOGIN</p>
                    <p>SIGNUP</p>


                </div>

                <div className="fields">
                    <input type={"text"} placeholder={"Username"} id='name'onChange={(e)=>{setUsername(e.target.value)}}/>

                </div>
                <div className="fields">
                    <input type={"text"} placeholder={"Password"} id='code'/>

                </div>
                <p><input type={'checkbox'}/> Stay signed in</p>
                <Link to={'/home'}>
                <button>SIGN IN</button>
                </Link>

                <p>Forgot Password ?</p>




            </div> 
            </div>

        </div>
    )
}
export default Landing;