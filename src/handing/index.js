//react 事件的处理
/**
 *  1, React 事件的命名采用小驼峰式（camelCase），而不是纯小写
 * 2，使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
 * 3，在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写
 * 
 * 
 * 
 */

 import React from 'react';
 import ReactDOM from 'react-dom';



 // 绑定函数的列子一

// class LoggingButton extends React.Component {
//     // 此语法确保 `handleClick` 内的 `this` 已被绑定。
//     // 注意: 这是 *实验性* 语法。
//     handleClick = () => {
//       console.log('this is:', this);
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           Click me
//         </button>
//       );
//     }
//   }

//   ReactDOM.render(
//       <LoggingButton/>,
//       document.getElementById("root")
//   )






// 绑定函数的列子二

// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // 为了在回调中使用 `this`，这个绑定是必不可少的
//     //   this.handleClick = this.handleClick.bind(this);
    
//     }
  
//     handleClick() {
//         // console.log(this)

//         //  这个时候用箭头函数就有this 这种方式和箭头函数不是一样的吗
//       this.setState(state => ({
//         isToggleOn: !state.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
//   );




  // 列子三 参数的传递

  //在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
/**
 * <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
 * 
 */



class LoggingButton extends React.Component {
    handleClick = (num) => {
      console.log(num);
    }
    render() {
      return (
        //   这里为什么要用bind 呢 ， 因为bind 不会执行函数，而 call 会执行函数（这样的话就直接执行了handleClick 方法了）
        <button onClick={this.handleClick.bind(this,123444)}>
          Click me
        </button>
      );
    }
  }

  ReactDOM.render(
      <LoggingButton/>,
      document.getElementById("root")
  )

