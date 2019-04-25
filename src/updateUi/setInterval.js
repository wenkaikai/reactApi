import React from 'react';
import ReactDOM from 'react-dom';

// 除了状态管理还有其他的方法跟新视图吗
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  // setInterval 更新视图
  /**
   * 第一个问题，在实际生产开发中，大多数React应用只会调用一次 ReactDOM.render() 。在下一个章节中我们将会详细介绍 有状态组件 实现 DOM 更新方式。
   * 第二个问题 React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。
   * 
   */
  setInterval(tick, 1000);

