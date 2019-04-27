import React from 'react';
import ReactDOM from 'react-dom';
function FancyBorder(props) {
    // console.log(props)
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

function Dialog(props) {
    console.log(props)
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {/* 把父组件的props的children 在一次的传给子组件 */}
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                <input value={this.state.login}
                    onChange={this.handleChange} />

                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById("root")
)
