import Comment from "./Comment";

// 댓글 데이터
const comments = [
    { name: "홍길동", comment: "안녕하세요. 홍길동입니다.", picture: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-business-men-icon-png-image_4186858.jpg" },
    { name: "고길동", comment: "안녕하세요. 고길동입니다.", picture: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-male-worker-icon-graphic-png-image_3668949.jpg" },
    { name: "신길동", comment: "안녕하세요. 신길동입니다.", picture: "https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-avatar-icon-png-image_4162757.jpg" },
];

function CommentList(props) {
    return (
        <>
            <h1>모두 출력</h1>
            {
                comments.map((c, index) => <Comment name={c.name} comment={c.comment} key={index} picture={c.picture} />)
            }
            <hr />
            <h1>이름이 홍길동인 경우에만 출력</h1>
            {
                // filter 사용
                comments
                    .filter(c => c.name === '홍길동')
                    .map((c, i) => <Comment name={c.name} comment={c.comment} picture={c.picture} key={i} />)
            }
            <hr />
             {
                // && 연산자를 이용해서 조건부 렌더링
                comments
                .map((c, i) => {
                    return c.name === '홍길동' && <Comment name={c.name} comment={c.comment} picture={c.picture} key={i} />
                })
            }
            <hr />
            {
                // 삼항 연잔자를 사용하는 경우 
                comments
                .map((c, i) => {
                    return c.name === '홍길동' ? <Comment name={c.name} comment={c.comment} picture={c.picture} key={i} /> : ""
                })
            }
        </>
    );
}
export default CommentList;
