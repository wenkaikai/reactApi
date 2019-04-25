import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**

    Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

以下两种示例代码完全等效：

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
*/

function formatName(user) {
    if (user) {
        const element = React.createElement(
            'span', { className: 'greeting' },
            'Hello, world!'
        );
        return element;
    }
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);