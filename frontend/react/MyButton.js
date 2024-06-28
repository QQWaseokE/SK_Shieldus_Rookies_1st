function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);        // useState : 상태변수를 정의

    return React.createElement(
        "button", 
        { onClick: () => setIsClicked(!isClicked) },                //button이 어떻게 동작해야 하는지
        isClicked ? '클릭되었습니다.' : '클릭해 주세요.'
    )                                                               // <button onclick = " ... "> 클릭xxx </button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));  // <div id="root"></div>
root.render(React.createElement(MyButton));