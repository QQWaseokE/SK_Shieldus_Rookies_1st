import { Component } from "react";

class Counter extends Component {
    state = {
        number: 0, 
        fixedNumber: 10
    };

    render() {
        const { number, fixedNumber } = this.state;  // 객체 비구조화
        return (
            <>                  
                <h1>{number}</h1>    
                <button onClick={() => {
                    // 상태 변수 변경 후 변경 내용을 로그로 기록
                    console.log('변경전', number);
                    this.setState({ number: number + 1 }, () => console.log('변경후', this.state.number));         
                    // console.log('변경후', number);           
                }}>하나 더하기</button>
                <button onClick={() => {
                    this.setState( prevState => ({ number: prevState.number + 1 }), () => console.log('변경후', this.state.number));
                    this.setState( prevState => ({ number: prevState.number + 1 }) );
                    this.setState( prevState => ({ number: prevState.number + 1 }) );
                    this.setState( prevState => ({ number: prevState.number + 1 }) );
                    this.setState( prevState => ({ number: prevState.number + 1 }) );
                }}>다섯 더하기</button>
                <h1>{fixedNumber}</h1>
            </>
        );
    }
}

export default Counter;