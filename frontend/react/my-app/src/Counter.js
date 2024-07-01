import { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,           // 상태 변수 number를 초기화
        fixedNumber: 10
    };


    render() {
        const { number, fixedNumber } = this.state // 객체 비구조화
        return (
            <>
                {/* 상태 변수를 참조 */}
                <h1>{number}</h1>
                {/* 버튼의 동작을 기술 */}
                <button onClick={() => { this.setState({ number: number + 1 }) }}>하나 더하기</button>
                <button onClick={() => {
                    this.setState(prevState => ({ number: prevState.number + 1 }));
                    this.setState(prevState => ({ number: prevState.number + 1 }));
                    this.setState(prevState => ({ number: prevState.number + 1 }));
                    this.setState(prevState => ({ number: prevState.number + 1 }));
                    this.setState(prevState => ({ number: prevState.number + 1 }));
                }}>다섯 더하기</button>
                <h1>{fixedNumber}</h1>
            </>
        );
    }
}

export default Counter;
