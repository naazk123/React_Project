import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFuntional from "./Profile";

const About = () =>{
    return (
        <div>
            <h1>About Us</h1>
            <ProfileClass name="Khan"/>
            <ProfileFuntional name="Naziya"/>
        </div>
        
    )
}

export default About;