import UserClass from "./UserClass"
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");

    }
    componentDidMount(){
         console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent Render");

        return (
            <div className="about-container">
                <h1>About Page</h1>
                <UserClass name="1st Child" city="Bannu" />
                <UserClass name="2nd Child" city="Bannu" />
                <UserClass name="3rd Child" city="Bannu" />
            </div>
        )
    }
}


export default About;