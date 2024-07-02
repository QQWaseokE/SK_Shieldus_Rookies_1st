import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    };

    handlerChange = e => this.setState({[e.target.name]: e.target.value});


    handlerClick = () => this.setState({message: ""});

    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="입력해 보세요." 
                    value={this.state.message} onChange={this.handlerChange} />
                <input type="text" name="username" placeholder="사용자 이름을 입력하세요."
                    value={this.state.username} onChange={this.handlerChange}/>
                <h2>입력 내용 » {this.state.message}</h2>
                <h2>사용자 이름 » {this.state.username}</h2>
                <button onClick={this.handlerClick}>확인</button>
            </>
        );
    }
}

export default EventPractice;
