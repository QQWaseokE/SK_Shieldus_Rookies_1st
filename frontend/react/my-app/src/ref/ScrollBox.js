import React, { Component } from "react";

class ScrollBox extends Component {
    
    myscroll = React.createRef();

    scrollTop = () => {
        this.myscroll.current.scrollTop = 0;
    };

    scrollBottom = () => {
        const {scrollHeight, clientHeight} = this.myscroll.current;
        this.myscroll.current.scrollTop = scrollHeight - clientHeight;
    };

    render() {
        const styles = {
            outer: {
                border: '1px solid black', 
                height: 300, 
                width: 300, 
                overflow: 'auto',                 
            }, 
            inner: {
                width: '100%', 
                height: 650, 
                background: 'linear-gradient(white, black)'
            }
        };

        return (
            <>
                <div ref={this.myscroll} style={styles.outer}>
                    <div style={styles.inner}></div>
                </div>
                <div>
                    <button onClick={this.scrollTop}>맨 위로 이동</button>
                    <button onClick={this.scrollBottom}>맨 아래로 이동</button>
                </div>
            </>
        );
    }
}

export default ScrollBox;
