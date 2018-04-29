import React from 'react';



class Counter extends React.Component {
    state = { 
        count: 0 
      }
  
    increment = () => {
      this.setState({
        count: this.state.count + 1
      });
    }

    multiply2 = () => {
        this.setState({
          count: this.state.count * 2
        });
      }
    
  
    decrement = () => {
      this.setState({
        count: this.state.count - 1
      });
    }

    divide2 = () => {
        this.setState({
          count: this.state.count / 2
        });
      }

    reset = () => {
        this.setState({
          count: this.state.count = 0
        });
      }
  
    render() {
      return (
        <div>
          <h2>Counter</h2>
          <div>
            <button onClick={this.multiply2}>*2</button>
            <button onClick={this.decrement}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.increment}>+</button>
            <button onClick={this.divide2}>/2</button>
          <div>
            <button onClick={this.reset}>Reset</button>
          </div>
          </div>
            
        </div>
      )
    }
  }
  
  export default Counter;