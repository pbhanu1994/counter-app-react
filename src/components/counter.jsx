import React, { Component } from "react";
class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //     // tags: ["tag1", "tag2", "tag3"]
  //   };

  //   constructor() {
  //     super();
  //     // console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   handleIncrement = product => {
  //     console.log(product);
  //     console.log("Increment Clicked", this);
  //     // this.state.count++;
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("props", this.props);
    console.log(this.props.children);
    return (
      <div>
        {/* {this.props.children} */}
        <h4>{this.props.counter.id}</h4>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-md m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
