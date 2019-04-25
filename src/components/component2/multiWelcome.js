import React from 'react'
import ReactDOM from 'react-dom'
// 定义一个最底层的组件
function Welcome(props){
    //console.log(props)

    /**这个时候的props 父亲组件传过来的
     *  
     * 组件名称必须以大写字母开头
     * React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome
     * 
     */
    return (
        <div>{props.name}</div>
    )
}

// 那么我们如何一次引入多个welcome 呢
function App(){
    return (
        <div>
            <Welcome name="sala"/>
            <Welcome name="cahal"/>
            <Welcome name="Edite"/>
        </div>
        
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)