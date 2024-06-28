function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        "button", 
        { onClick: () => setIsClicked(!isClicked) }, 
        isClicked ? '클릭되었습니다.' : '클릭해 주세요.'
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));  // <div id="root"></div>
root.render(React.createElement(MyButton));