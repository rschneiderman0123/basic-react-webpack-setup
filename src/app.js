import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.css'


class HelloWorld extends React.Component {
    render() {
        return <h1> Hello from React {this.props.phrase}!</h1>;
    }
}


ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.getElementById('app')
);