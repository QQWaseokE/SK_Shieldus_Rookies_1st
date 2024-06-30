function MyComponentFunction(props) {
    console.log(props);                 // {name: '고길동'}
    return (
        <>
            <h1>이름은 {props.name}입니다.</h1>
            <h2>나이는 23살입니다.</h2>        
        </>
    );
}
export default MyComponentFunction;
