import React, { Component } from "react";
import "./App.css"
import Friends from "./Friends";
import Friend from "./Friend";
import friend1 from "./images/1.jpeg";
import friend2 from "./images/2.jpeg";
import friend3 from "./images/3.jpeg";

export default class App extends Component {
  render() {
    return (
      <div class="ui comments">
        <h3 class="ui dividing header">LIST FRIEND</h3>
        <Friends>
          <Friend
            image={friend1}
            name="Laura"
            time="Today at 5:42PM"
            comment="How artistic!"
          />
        </Friends>
        <Friends>
          <Friend
            image={friend2}
            name="Diana"
            time="Today at 8:13PM"
            comment="Awesome!"
          />
        </Friends>
        <Friends>
          <Friend
            image={friend3}
            name="Luna"
            time="Today at 6:34PM"
            comment="Cool!"
          />
        </Friends>
      </div>
    );
  }
}
