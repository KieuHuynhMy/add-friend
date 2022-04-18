import React, { Component } from "react";

// Function Component
const Friend = (props) => (
  <div class="comment">
    <a class="avatar">
      <img src={props.image} />
    </a>
    <div class="content">
      <a class="author">{props.name}</a>
      <div class="metadata">
        <span class="date">{props.time}</span>
      </div>
      <div class="text">{props.comment}</div>
    </div>
  </div>
);
export default Friend;

// // Class Component
// export default class Friend extends Component {
//   render() {
//     return (
//         <div class="comment">
//           <a class="avatar">
//             <img src={this.props.image} />
//           </a>
//           <div class="content">
//             <a class="author">{this.props.name}</a>
//             <div class="metadata">
//               <span class="date">{this.props.time}</span>
//             </div>
//             <div class="text">{this.props.comment}</div>
//           </div>
//         </div>
//     );
//   }
// }
