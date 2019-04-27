import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 少数情况下，你可能需要在一个组件中预留出几个“洞”。
 * 这种情况下，我们可以不使用 children，而是自行约定：将所需内容传入 props，并使用相应的 prop。
 * 
 * 这个likenessSlot 和index.js 的区别是 likenessSlot 不是用默认的children 而是用props自定义的。
 */
function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function App() {
    return (
      <SplitPane
        left={
          (<div>
              这个是left
          </div>)
        }
        right={
            (<div>
                这个是right
            </div>)
        } />
    );
  }
  ReactDOM.render(
    <App />,
    document.getElementById("root")
)
