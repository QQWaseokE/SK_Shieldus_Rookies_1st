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


    const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
    return (
        <>
            <input type="text" value={inputText} onChange={handlerChange}/>
            <button onClick={handlerAddItem}>추가</button>
            <ul>{nameList}</ul>        
        </>
    );
}
export default IterationSample;
