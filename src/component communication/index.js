import React from 'react';
import ReactDOM from 'react-dom';
class Son extends React.Component {
    render() {
        // 这里的这个方法 onChange 是从父组件传过来的
      return <input onChange={this.props.onChange}/>;
    }
  }
  
  class Father extends React.Component {
    constructor() {
      super();
      this.state = {
        son: ""
      }
    }
    changeHandler(e) {
        console.log(e)
        e.persist();// 
        console.log(e)
      this.setState({
        son: e.target.value
      });
    }
    render() {
      return <div>
        <Son onChange={this.changeHandler.bind(this)}/>
        <p>这里显示 Son 组件的内容：{this.state.son}</p>
      </div>;
    }
  }
  
  ReactDOM.render(<Father/>,  document.getElementById("root"));
  