import './list.css';
import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        const { initialItems = [] } = props;
        this.state = {
            items: initialItems,
            inputValue: ''
        };
    }
    onInput = (ev) => {
        this.setState({
            inputValue: ev.target.value.trim()
        });
    };
    addItem = () => {
        this.setState(state => {
            if (state.inputValue === '') {
                return state;
            }
            return {
                items: [...state.items, state.inputValue]
            }
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

export default List;
