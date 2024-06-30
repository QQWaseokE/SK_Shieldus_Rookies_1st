import { Component } from "react";

class MyComponentClass extends Component { 
    render() {
        const {name, age, nickname} = this.props;
        return (
            <>
                <h1>이름은 {name}입니다.</h1>
                <h2>나이는 {age}살입니다.</h2>
                <h2>별명은 {nickname}입니다.</h2>
            </>
        );
    }
}
export default MyComponentClass;