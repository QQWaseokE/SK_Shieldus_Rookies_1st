import { Component } from "react";

class MyComponentClass extends Component { 
    render() {
        console.log(this);
        console.log(this.props);    // {name: '신길동'}

        return (
            <>
                <h1>이름은 {this.props.name}입니다.</h1>
                <h2>나이는 23살입니다.</h2>
            </>
        );
    }
}
export default MyComponentClass;
