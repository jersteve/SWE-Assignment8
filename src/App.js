import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      //BEGIN HEADER INFO
      <div class="Full-page">
        <h1 className="App" style={{ fontSize: "160%", marginTop: "0.1rem" }}>
          George Mason University Gym Rater
        </h1>
        <p className="App" style={{ fontSize: "80%", marginTop: "-0.5rem" }}>
          Developed by: Jerome Steve Sahayadarlin &amp; Ashwath Rashi
        </p>
        <br></br>
        <Form /> {/* Form --> refer to Form.js file*/}
      </div>
      //END HEADER INFO
    );
  }
}

export default App;