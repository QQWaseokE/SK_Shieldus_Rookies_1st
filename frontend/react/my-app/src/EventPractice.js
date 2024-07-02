import { useState } from "react";

const EventPractice = () => {
    const [ message, setMessage ] = useState('');
    const [ username, setUsername ] = useState('');

    const handlerChangeMessage = e => setMessage(e.target.value);
    const handlerChangeUsername = e => setUsername(e.target.value);

    const handlerClick = () => {
        setMessage('');
        setUsername('');
    ;}

    const handlerKeyUp = e => {
        if (e.key === 'Enter') {
            handlerClick();
        }
    };

    return (
        <>
            <h1>이벤트 연습</h1>
            <input type="text" name="message" placeholder="입력해 보세요." 
                value={message} onChange={handlerChangeMessage} onKeyUp={handlerKeyUp} />
            <input type="text" name="username" placeholder="사용자 이름을 입력하세요."
                value={username} onChange={handlerChangeUsername} onKeyUp={handlerKeyUp}/>
            <h2>입력 내용 » {message}</h2>
            <h2>사용자 이름 » {username}</h2>
            <button onClick={handlerClick}>확인</button>

        </>
    )
}

export default EventPractice;
