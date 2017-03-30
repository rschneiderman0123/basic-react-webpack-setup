import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
    render() {
        return <h1>Hello from React ES6 {this.props.phrase}!</h1>;
    }
}


ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.getElementById('app')
);