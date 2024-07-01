import Comment from "./Comment";

// 댓글 데이터
const comments = [
    { name: "홍길동", comment: "안녕하세요. 홍길동입니다." },
    { name: "홍길동", comment: "안녕하세요. 홍길동입니다." },
    { name: "홍길동", comment: "안녕하세요. 홍길동입니다." },
];

function CommentList(props) {
    return (
        <>
            {   // 익명 함수 표현식
                comments.map(function (c, index) {
                    return <Comment name={c.name} comment={c.comment} key={index} />
                })
            }

            {   // 화살표 함수
                comments.map((c, index) => {
                    return <Comment name={c.name} comment={c.comment} key={index} />;
                })
            }

            {   // 화살표 함수 (축약)
                comments.map((c, index) => <Comment name={c.name} comment={c.comment} key={index} />)
            }
        </>
    );
}
export default CommentList;
