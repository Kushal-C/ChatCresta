import React, { Component } from 'react'

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { currentCount: 0, isSelected: props.isSelected };
    }

    timer() {
        if (!this.state.isSelected) {
            this.setState({
                currentCount: this.state.currentCount + 1
            });
            if (this.state.currentCount < 1) {
                clearInterval(this.intervalId);
            }
        } 
        else {
            this.setState({currentCount: 0});
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <p>Time spent on Conversation: {this.state.currentCount}</p>
            </div>
        )
    }
}
export default Timer;