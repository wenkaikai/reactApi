import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
	函数也是一个组件 定义完一个函数以后 可以直接用标签引用
*/




function Welcome(props){
	return (
			<h2>Hello ,{props.name}</h2>
		)
}


function App(){
	return (
		<div>
			<Welcome name="Sara"/>
			<Welcome name="Cahal"/>
			<Welcome name="Edite"/>
		</div>	
	);
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);