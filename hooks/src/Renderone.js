import React, { Component } from 'react'

class Renderone extends Component {
  render() {
    return (
      <div>
      {this.props.render(false)}
      </div>
    )
  }
}

export default Renderone