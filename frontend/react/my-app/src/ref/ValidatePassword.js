import { Component } from "react";

class ValidatePassword extends Component {
    state = {
        password: ''
    };

    handlerChangePassword = e => this.setState({password: e.target.value});

    reder() {
        return (
            <>
                <input type="password" value={password} onChange={handlerChangePassword} />
                <button>패스워드 검증</button>
            </>
        );
    }
}

export default ValidatePassword;