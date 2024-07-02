import { Component } from "react";

class EventPractice extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handlerChange = this.handlerChange.bind(this);
    //     this.handlerClick = this.handlerClick.bind(this);
    //     this.state = {
    //         message: ''
    //     };
    // }
    
    // handlerChange(e) {
    //     console.log(e.target.value);
    //     this.setState({message: e.target.value});
    // }

    // handlerClick() {
    //     this.setState({message: ""})
    // }

    state = {
        message: ''
    };

    // ES6 클래스 필드 문법을 사용해서 메서드를 화살표 함수로 정의 
    // 화살표 함수는 자신만의 this를 가지지 않고, 선언된 클래스 인스턴스의 this를 유지
    handlerChange = e => {
        console.log(e.target.value);
        this.setState({message: e.target.value});
    };

    handlerClick = () => this.setState({message: ""});

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
