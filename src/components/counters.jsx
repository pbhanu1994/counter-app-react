import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Object Destructuring
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-warning btn-md m-2">
          <b>Reset</b>
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          >
            {/* <h4>Counter {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
