import { useState } from "react";

const Say = (props) => {
    const [ message, setMessage ] = useState('');
    const [ color, setColor ] = useState('black');

    const handlerClickEnter = () => setMessage('입장합니다.');
    const handlerClickLeave = () => setMessage('퇴장합니다.');

    const arr = [ 1, 2, 3, 4 ];

    const newArr = [ ...arr ]; 

    const newArr2 = arr.concat(100);	// arr에 100을 추가하여 newArr2가 만들어짐

    const newArr3 = arr.push(50);	// 100을 arr에 추가하고, 길이를 반환, newArr2에는 변화없음

    console.log(arr, newArr, newArr2, newArr3);

    return (
        <>
            <h1 style={{ color }}>{message}</h1>
            <button onClick={handlerClickEnter}>입장</button>
            <button onClick={handlerClickLeave}>퇴장</button>

            <button onClick={() => setColor('red')}>빨간색</button>
            <button onClick={() => setColor('blue')}>파란색</button>
            <button onClick={() => setColor('green')}>초록색</button>
        </>
    );
}
export default Say;