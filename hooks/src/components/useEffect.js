import React, { Component } from 'react'

class UseEffect extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  componentDidMount(){
    document.title=`clicked${this.state.count}`
  }

  componentDidUpdate(prevProps,prevState){
document.title=`clicked ${this.state.count}times`
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count+1})}></button>
       click{this.state.count}times
      </div>
    )
  }

}
export default UseEffect