import React, { Component } from "react";

export default class Friends extends Component {
  render() {
    return (
      <div className="ui card">
        <div class="content">
          <a class="header">You knows</a>
          <div class="description">{this.props.children}</div>
        </div>
        <button class="ui bottom button">
          <i className="add icon"></i>Add friend
        </button>
      </div>
    );
  }
}
