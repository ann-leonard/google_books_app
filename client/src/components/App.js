import React, { Component } from "react";

import Header from "./Header"

//test request
//API.search("programming").then((response)=>{console.log(response)})


class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
