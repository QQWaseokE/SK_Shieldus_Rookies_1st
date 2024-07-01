import Comment from "./Comment";

// 댓글 데이터
const comments = [
    { name: "홍길동", comment: "안녕하세요. 홍길동입니다." }, 
    { name: "고길동", comment: "안녕하세요. 고길동입니다." },
    { name: "신길동", comment: "안녕하세요. 신길동입니다." }, 
];

// 사용자 데이터
const users = [
    { name: "홍길동", regno: "701010-1457934", picture: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-business-men-icon-png-image_4186858.jpg" },
    { name: "신길동", regno: "201010-3457934", picture: "https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-avatar-icon-png-image_4162757.jpg" },
    { name: "고길동", regno: "211010-4157934", picture: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-male-worker-icon-graphic-png-image_3668949.jpg" }
];


function CommentList(props) {
    // 성별을 반환하는 함수를 정의
    const getUserGender = name => {
        const user = users.find(user => user.name === name);
        return [1, 3].includes(Number(user.regno[7])) ? "남" : "여";    // include() : 배열에 특정 요소를 포함하는지 확인하는 함수
    };
    
    // 댓글 데이터와 사용자 데이터를 결합하는 과정에서 이름을 재설정
    const commentsWithUser = comments.map(c => ({ ...c, picture: users.find(u => u.name === c.name).picture, name: `${c.name} (${getUserGender(c.name)})` }));
    

    return (
        <>
            <h1>모두 출력</h1>
            {   
                commentsWithUser
                .map((c, i) => <Comment name={c.name} comment={c.comment} key={i} picture={c.picture} />)
            }
            <hr/>
            <h1>이름이 홍길동인 경우에만 출력</h1>
            {
                commentsWithUser
                .filter(c => c.name.indexOf('홍길동') >= 0)
                .map((c, i) => <Comment name={c.name} comment={c.comment} picture={c.picture} key={i} />)
            }
        </>
    );
}
export default CommentList;
