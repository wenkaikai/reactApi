import React from 'react';
import ReactDOM from 'react-dom';

// 定义一个类

class Clock extends React.Component{
    constructor(props){
        super(props)// 把props传给super 这里要先调用super 不然就没有this
        this.state = {
            date:new Date(),
            name:props.name
        }
        console.log(this.state)
    }
    componentDidMount() {
        //在第一次渲染后调用，只在客户端
        //已经被渲染到 DOM 中后运行
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {//在组件从 DOM 中移除之前立刻被调用
        clearInterval(this.timerID);
      }
    
      tick() {
          // 自定义的方法可以随便写
        // this.setState({
        //   date: new Date()
        // });

        this.setState((state,props)=>{
            // console.log(state)
            // console.log(props)
            return {
                date:new Date()
            }
        });
      }


    render(){
        return (
            <div>
                <div>haode</div>
                <div>It is {this.state.name}</div>
                <div>It is {this.state.date.getTime()}</div>
            </div>
        )
    }
   
}


/**
 * 数据是向下流动的
 * 不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件
 * 这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。
 * 
 * 
 * 
 */
ReactDOM.render(
    <Clock name="123"/>,
    document.getElementById("root")
)