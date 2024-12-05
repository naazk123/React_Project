import { useState } from "react";
import { Link } from "react-router-dom";



export const Title = () => {
    return (
        <a href="/">
        <img className="h-28 p-2" alt="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
        </a>
    );
} 

const Header = () => {
    const [isLoggedIn, setLoggedIn]=useState(false);
    return (
        <div className="flex justify-between bg-pink shadow-lg sm: bg-blue-100 " >
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    
                    <li className="px-2"><Link to={"/"}>Home</Link></li>
                    <li className="px-2"><Link to={"/about"}>About us</Link></li>
                    <li className="px-2"><Link to={"/contact"}>Contact</Link></li>
                    <li className="px-2">Cart</li>
                </ul>
            </div>
            {
                (isLoggedIn) ? <button onClick={()=>setLoggedIn(false)}>Logout</button> : <button onClick={()=>setLoggedIn(true)}>Login</button>
            }
            
            
        </div>
    );
};
export default Header;