function MyComponentFunction({name, age, nickname}) {
    return (
        <>
            <h1>이름은 {name}입니다.</h1>
            <h2>나이는 {age}살입니다.</h2>        
            <h2>별명은 {nickname}입니다.</h2>
        </>
    );
}

MyComponentFunction.defaultProps = {
    name: '아무개', 
    age: 0, 
    nickname: '없음'
};

export default MyComponentFunction;