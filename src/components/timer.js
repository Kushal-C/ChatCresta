import React, { Component } from 'react'


class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
        }
    }

    tick() {
        this.setState((state) => ({ time: state.time + 1 }));
        console.log(this.state.time);
        this.render();
    }
    componentDidMount() {
        let timer = setInterval(this.tick(), 1000);
        this.setState({ timer });
    }
    componentWillUnmount() {
        clearInterval(this.timer, this.state.time);
    }
    render() {
        return (
            <div>Time Waiting: {this.state.timer}</div>
        );
    }
}

export default Timer;