import { Component } from "react";

class EventPractice extends Component {
    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" 
                placeholder="입력해 보세요." 
                onChange={e => console.log(e.target.value)} />
            </>
        );
    }
}

export default EventPractice;
