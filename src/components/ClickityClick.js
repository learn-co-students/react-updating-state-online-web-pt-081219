import React from 'react'

class ClickityClick extends React.Component {

  constructor() {
    super()

    this.state = {
      hasBeenClicked: false,
      count: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }

}

export default ClickityClick
