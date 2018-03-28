import "./list.css";
import React from "react";

export default class List extends React.Component {
    static defaultProps = {
        initialItems: []
    };
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            items: props.initialItems
        };
    }
    onInput = ev => {
        this.setState({
            inputValue: ev.target.value.trim()
        });
    };
    addItem = () => {
        this.setState(state => {
            if (state.inputValue === "") {
                return state;
            }
            return {
                items: [...state.items, state.inputValue]
            };
        });
    };
    render() {
        return (
            <div className="list">
                <ul>
                    {this.state.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <input onInput={this.onInput} />
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }
}
