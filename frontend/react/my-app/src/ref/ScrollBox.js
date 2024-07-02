import { Component } from "react";

class ScrollBox extends Component {
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
            <div style={styles.outer}>
                <div style={styles.inner}></div>
            </div>
        );
    }
}

export default ScrollBox;
