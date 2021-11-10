import React from 'react';
// import classes from './header.module.css';

class Header extends React.Component {
    render() {
        return(
            <header style={styles.header}>
                <h3>CarWatch</h3>
            </header>
        );
    }
}

const styles = {
    header: {
        height: 80,
        width: '100vw',
        backgroundColor: 'aliceblue',
        padding: 15,
        boxSizing: 'border-box'
    }
}

export default Header;