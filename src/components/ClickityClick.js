import React from 'react';

class ClickityCick extends React.Component {

    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? "" : "not"} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }

}

export default ClickityCick;