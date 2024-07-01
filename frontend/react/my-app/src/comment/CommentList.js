import Comment from "./Comment";

function CommentList(props) {
    return (
        <>
            <Comment name="홍길동" comment="안녕하세요. 홍길동입니다."/>
            <Comment name="고길동" comment="안녕하세요. 고길동입니다."/>
            <Comment name="신길동" comment="안녕하세요. 신길동입니다."/>
        </>
    );
}
export default CommentList;
