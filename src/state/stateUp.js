import React from 'react';
import ReactDOM from 'react-dom';
// 这里的数据之所以会更新就是传入的props更新了
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
        //this.setState({ temperature: "" });// 当设置为空的时候也能触发render更新。 
    }

    render() {
        const temperature = this.state.temperature;
        // 为什么输入框的onChange 触发 这个render 就会触发呢
        // const temperature = "";
        console.log("11")
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />

                <BoilingVerdict
                    celsius={parseFloat(temperature)} />

            </fieldset>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
)

/**
 * 大多数React应用只会调用一次 ReactDOM.render() 
 * 
 */