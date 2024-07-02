import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([ 
        { id: 1, text: "눈사람" }, 
        { id: 2, text: "얼음"}, 
        { id: 3, text: "눈"}, 
        { id: 4, text: "바람" }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const handlerChange = e => setInputText(e.target.value);
    const handlerAddItem = () => {
        // const newNames = names.concat({ id: nextId, text: inputText });
        const newNames = [ ...names, { id: nextId, text: inputText } ];
        setNames(newNames);
        setNextId(nextId + 1);
        setInputText('');
    };
    const handlerRemoveItem = id => {
        // names 상태변수에 id의 값이 매개변수와 일치하는 항목을 제거 
        // => names 상태변수에서 id의 값이 매개변수와 일치하지 않는 항목만 남기는 것
        // => filter 메서드를 이용해서 구현이 가능
        const newNames = names.filter(name => name.id != id);
        setNames(newNames);
    };

    // 이벤트 핸들러 함수를 호출할 때 이벤트 객체가 아닌 다른 값을 인자값으로 전달하는 방법 
    // 인자값과 함께 이벤트 핸들러 함수를 호출하는 함수를 정의
    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => handlerRemoveItem(name.id)}>{name.text}</li>);
    return (
        <>
            <input type="text" value={inputText} onChange={handlerChange} />
            <button onClick={handlerAddItem}>추가</button>
            <ul>{nameList}</ul>        
        </>
    );
}
export default IterationSample;
