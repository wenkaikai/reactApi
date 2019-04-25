import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 
 * 数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值：
 * 
 * key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值：
 */
function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    const content1 = [1,2,3] // 这样也能渲染
    console.log(content) // 这个时候是一个数组 但是当return 的时候就会返回这个数组也能选入按。
    console.log(props.posts)// 但是props 为什么不行呢.。 为什么同是数组里面的对象一个行一个不行呢。
    return (
      <div>
        {sidebar}
        <hr />
        {content}
        <hr/>
        {content1}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );