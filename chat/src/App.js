import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="container">
        <aside class="sidebar">Users</aside>
        <div class="main">
          <div class="messages-list">Messages list</div>
          <div class="new-message">New Message</div>
        </div>
      </div>
    );
  }
}

export default App;