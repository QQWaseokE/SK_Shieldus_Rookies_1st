import Comment from "./Comment";

// 댓글 데이터
const comments = [
    { name: "홍길동", comment: "안녕하세요. 홍길동입니다." }, 
    { name: "고길동", comment: "안녕하세요. 고길동입니다." },
    { name: "신길동", comment: "안녕하세요. 신길동입니다." }, 
];

// 사용자 데이터
const users = [
    { name: "홍길동", picture: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-business-men-icon-png-image_4186858.jpg" }, 
    { name: "고길동", picture: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-male-worker-icon-graphic-png-image_3668949.jpg" }, 
    { name: "신길동", picture: "https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-avatar-icon-png-image_4162757.jpg" }, 
];

function getUser(name) {
    return users.filter(u => u.name === name);
}

function CommentList(props) {
    return (
        <>
            <h1>모두 출력</h1>
            {   
                comments.map((c, i) => <Comment name={c.name} comment={c.comment} key={i} picture={getUser(c.name)[0].picture} />)
            }
            
        </>
    );
}
export default CommentList;
