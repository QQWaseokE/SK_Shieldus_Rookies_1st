import { Component } from "react";

class ValidatePassword extends Component {
    state = {
        password: '',
        isValid: false
    };

    handlerChangePassword = e => this.setState({ password: e.target.value });
    handlerButtonClick = () => {
        if (this.state.password === "0000") {
            this.setState({ isValid: true });
        } else {
            this.setState({ isValid: false });
        }
    };
    render() {
        return (
            <>
                <input type="password" value={this.state.password} onChange={this.handlerChangePassword}
                    style={this.state.isValid ? { backgroundColor: "blue" } : { backgroundColor: "red" }} />
                <button onClick={this.handlerButtonClick}>패스워드 검증</button>
            </>
        );
    }
}

export default ValidatePassword;
