import { Component } from "react";

class EventPractice extends Component {
    constructor(props) {
        super(props);
        // handlerXXX 메서드를 this와 함께 바인딩한 새로운 메서드로 대체
        // 클래스 메서드의 this를 클래스 인스턴스로 고정 
        // 이벤트 핸들러나 콜백 함수에서 메서드가 올바른 클래스 인스턴스를 참조하도록 보장 
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
        this.state = {
            message: ''
        };
    }
    
    handlerChange(e) {
        console.log(e.target.value);
        this.setState({message: e.target.value});
    }

    handlerClick() {
        this.setState({message: ""})
    }

    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" 
                    placeholder="입력해 보세요." 
                    value={this.state.message}
                    onChange={this.handlerChange} />
                <h2>입력 내용 » {this.state.message}</h2>
                <button onClick={this.handlerClick}>확인</button>
            </>
        );
    }
}

export default EventPractice;