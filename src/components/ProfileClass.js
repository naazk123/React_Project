import React from "react";
import ProfileFucntionalComponent from "./Profile";

class Profile extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            count2:2,
        };
        console.log("Construct");
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    render(){
        console.log("render");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>My Profile From Class</h1>
                <h2>{this.state.count}</h2>
                <h2>{this.state.count2}</h2>
                <button onClick={
                    ()=>{
                        this.setState({
                            count:66,
                        })
                    }
                }>Click Me</button>
            </div>
        )
    }
}

export default Profile;