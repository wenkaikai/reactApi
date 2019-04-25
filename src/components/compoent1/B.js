import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './components/temp'

/**
    定义一个元素连括号都不要了吗，还有一点节操吗
*/

const element = <h1> Hello fsdf</h1>;
ReactDOM.render(
    <Welcome/>,
    document.getElementById('root')
);