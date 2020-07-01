import React, { Component } from 'react'

class Test extends Component {

    state = {
        title: '',
        completed: ''
    }


    componentDidMount() {
        fetch
        ('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                completed: data.completed
          }))
    }

    // componentWillMount() {
    //     console.log('componentWillMount...');
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate...');
    // }

    // componentWillUpdate() {
    //     console.log('componentDidUpdate...');
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillReceiveProps...')
    // }

    
    render() {
        const { title, completed } = this.state;
        return ( 
            <div>
                <h1>{title}</h1>
                <p>{completed}</p>
            </div>
        )
    }
}

export default Test
