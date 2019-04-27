import React from 'react';
import ReactDOM from 'react-dom';
function FancyBorder(props) {
    console.log(props)
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
      {/* 这个props.children 就是一个数组[{<h1></h1>},{<p></p>}]*/}
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById("root")
)
