import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            count2: 2
        }
        console.log(this.props.name+" constructor");
        
    }
    componentDidMount(){
        console.log(this.props.name+" componentDidMount");
    }

    render() {
        const { name, city } = this.props;
        const { count } = this.state;
        console.log(this.props.name+" Render");
        

        return (
            <div className="user-card ">
                <p>Name: {name}</p>
                <p>City: {city}</p>
                <p>Count: {count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count</button>
            </div>
        )
    }
}

export default UserClass;