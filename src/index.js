import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
	函数也是一个组件 定义完一个函数以后 可以直接用标签引用
*/




function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
	/**
   * 
   * 此时的props  是一个对象 这样我们就可以直接用像调用函数参数一样表用参数了
   * 
   * 父组件像子组件传值
   * 
   * <Comment  date={} text={}/>  组件调用就像函数一样
   * 
      author: {
          name: "Hello Kitty",
          avatarUrl: "https://placekitten.com/g/64/64"
      }
      date: Thu Apr 04 2019 12 : 16 : 02 GMT + 0800(中国标准时间) {}
      text: "I hope you enjoy learning React!"
		
	*/
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


const comment = {
  date: new Date(),
  text: `<script>
    for(;;){
      alert(1)
    }
  </script>`,
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  },
};


ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);
