// import React, { Component } from "react";

// export default class Select2 extends Component {
//   state = {
//     isActive: false,
//     data: [],
//     dataResults: []
//   };

import React, { Component } from "react";
export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemChosen: "one",
      data: [],
      arr: [],
      isActive: false
    };
  }

  componentWillMount() {
    this.setState({
      // arr: this.props.data
    });
    console.log("wil mount");
    console.log(this.state.arr);
  }
  componentDidMount() {
    this.setState({
      arr: this.props.data,
      data: this.props.data
    });

    console.log("mount!");
    console.log(this.state.arr);
  }

  handleChosenItem = (item, index) => () => {
    // console.log(item, index);
    this.setState({
      itemChosen: item
    });
  };

  handleSearchResult = event => {
    let arrSearch = this.state.data;
    arrSearch = arrSearch.filter(item => {
      return item.search(event.target.value) !== -1;
    });
    // filter in array.

    // console.log(event.target.value);
    // console.log(a, arrSearch);

    this.setState({
      //  data: valueSearch
      // data: arrSearch
      // arr: a
      arr: arrSearch
    });
    console.log([event.target.value]);
    console.log([arrSearch]);
  };

  handleRenderItem = (item, index) => {
    const { itemChosen } = this.state;
    return (
      <li
        className="select2__item"
        onClick={this.handleChosenItem(item, index)}
        key={index}
      >
        {item}
      </li>
    );
  };

  handleOpenContainer = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const { itemChosen, data, isActive, arr } = this.state;
    // console.log(data, itemChosen);
    // console.log(this.state.data);

    return (
      <div className={`select2 ${isActive ? "active" : ""}`}>
        <h3>Select2 react component</h3>
        <div className={`select2__result`} onClick={this.handleOpenContainer}>
          {itemChosen}
        </div>
        <div className={`select2__container`}>
          <input type="text" onChange={this.handleSearchResult} />
          <ul className="select2__opts">{arr.map(this.handleRenderItem)}</ul>
        </div>
      </div>
    );
  }
}
