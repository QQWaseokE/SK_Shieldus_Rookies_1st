import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: ''
    };
    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" 
                    placeholder="입력해 보세요." 
                    value={this.state.message}
                    onChange={e => {
                        console.log(e.target.value);
                        this.setState({message: e.target.value});
                    }} />
                <h2>입력 내용 » {this.state.message}</h2>
                <button onClick={() => this.setState({message: ""})}>확인</button>
            </>
        );
    }
}

export default EventPractice;
