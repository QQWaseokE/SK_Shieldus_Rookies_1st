function Comment(props) {
    const styles = {
        wrapper: {
            display: 'flex', flexDirection: 'row', border: '1px solid gray', borderRadius: 16, padding: 8, margin: 8
        },
        image: {
            width: 50, height: 50, borderRadius: 25
        },
        contentContainer: {
            marginLeft: 10,
            display: 'flex', flexDirection: 'column'
        },
        nameText: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 3
        },
        commentText: {
            color: 'black',
            fontSize: 16
        }
    };
    return (
        <div style={styles.wrapper}>
            { /*작성한 사람의 이미지*/}
            <div>
                <img style={styles.image}
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
            </div>
            { /*작성한 사람의 이름과 댓글 내용*/}
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>작성자 이름</span>
                <span style={styles.commentText}>댓글 내용</span>
            </div>
        </div>
    );
}
export default Comment;
