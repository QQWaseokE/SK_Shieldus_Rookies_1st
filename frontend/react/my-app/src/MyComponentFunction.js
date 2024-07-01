import PropTypes from 'prop-types';

function MyComponentFunction({name = '아무개', age = 0, nickname = '없음', children}) {
    return (
        <>
            <h1>이름은 {name}입니다.</h1>
            <h2>나이는 {age}살입니다.</h2>        
            <h2>별명은 {nickname}입니다.</h2>
            <div>{children}</div>
        </>
    );
}

MyComponentFunction.propTypes = {
    name: PropTypes.string.isRequired
};

export default MyComponentFunction;