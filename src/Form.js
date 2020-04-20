import React from "react";
import "./App.css";

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      gym: "", //This is the gym selected by the user (Skyline, RAC, or AFC)

      cleanliness: "", //Rating for Cleanliness (1-5 or N/A)
      qualService: "", //Rating for Quality of Service (1-5 or N/A)
      equipDowntime: "", //Rating for Equipment Downtime (1-5 or N/A)
      amenities: "", //Rating for Amenities (1-5 or N/A)
      overall: "", //Overall Rating (1-5 or N/A)

      text: "", //Optional Text inputted by user
    };

    //Bind all functions
    this.handleChangeGym = this.handleChangeGym.bind(this);

    this.handleChangeClean = this.handleChangeClean.bind(this);
    this.handleChangeQual = this.handleChangeQual.bind(this);
    this.handleChangeEquip = this.handleChangeEquip.bind(this);
    this.handleChangeAmen = this.handleChangeAmen.bind(this);
    this.handleChangeOverall = this.handleChangeOverall.bind(this);

    this.handleChangeText = this.handleChangeText.bind(this);

    this.clearFields = this.clearFields.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //to reset states (when Clear Button clicked)
  get initialState() {
    return {
      gym: "",

      cleanliness: "",
      qualService: "",
      equipDowntime: "",
      amenities: "",
      overall: "",

      text: "",
    };
  }

  //Allow selection for gym
  handleChangeGym(event) {
    this.setState({
      gym: event.target.value,
    });
  }

  //Allow selection for Cleanliness Rating
  handleChangeClean(event) {
    this.setState({
      cleanliness: event.target.value,
    });
  }

  //Allow selection for Quality of Service Rating
  handleChangeQual(event) {
    this.setState({
      qualService: event.target.value,
    });
  }

  //Allow selection for Equipment Downtime Rating
  handleChangeEquip(event) {
    this.setState({
      equipDowntime: event.target.value,
    });
  }

  //Allow selection for Amenities Rating
  handleChangeAmen(event) {
    this.setState({
      amenities: event.target.value,
    });
  }

  //Allow selection for Overall Rating
  handleChangeOverall(event) {
    this.setState({
      overall: event.target.value,
    });
  }

  //Allow modification of Textbox
  handleChangeText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  //Prevent submissions that don't fill in all required fields; otherwise successfully submit & echo fields
  handleSubmit(event) {
    var gymChecked = true;
    var cleanlinessChecked = true;
    var qualityChecked = true;
    var equipmentChecked = true;
    var amenitiesChecked = true;
    var overallRatingChecked = true;

    var overallCheck = true; //variable to make sure all required fields are filled
    var sky = document.getElementById("skylineRadio").checked; //check if choice of gym is 'Skyline'
    var rac = document.getElementById("racRadio").checked; //check if choice of gym is 'RAC'
    var afc = document.getElementById("afcRadio").checked; //check if choice of gym is 'AFC'
    if (!sky && !rac && !afc) {
      gymChecked = false;
      //if none of the gyms is selected, this is invalid for submission
      event.preventDefault(); //prevent submission
      document.getElementById("selectGym").style.color = "red"; //change color of text to red for viewer
      overallCheck = false;
    } else {
      // a gym was selected so don't highlight in red
      document.getElementById("selectGym").style.color = "";
    }

    //Same radio buttons as above, for every row in main rating selection table

    var cleans = ["clean1", "clean2", "clean3", "clean4", "clean5", "clean6"];
    var found = false;
    for (var i = 0; i < cleans.length; i++) {
      //search through all radio buttons in row, for a selected one
      if (document.getElementById(cleans[i]).checked) {
        //if selected,
        found = true;
        document.getElementById("rateCleanRow").style.backgroundColor = ""; //set color as normal for row
        break;
      }
    }
    if (!found) {
      //no rating selection in row
      cleanlinessChecked = false;
      event.preventDefault(); //prevent submission
      overallCheck = false;
      document.getElementById("rateCleanRow").style.backgroundColor = "#8b0000"; //highlight row red for user
    }

    //same process below for every row in rating selection table
    var quals = ["qual1", "qual2", "qual3", "qual4", "qual5", "qual6"];
    var found = false;
    for (var i = 0; i < quals.length; i++) {
      if (document.getElementById(quals[i]).checked) {
        found = true;
        document.getElementById("rateQualRow").style.backgroundColor = "";
        break;
      }
    }
    if (!found) {
      qualityChecked = false;
      event.preventDefault();
      overallCheck = false;
      document.getElementById("rateQualRow").style.backgroundColor = "#8b0000";
    }

    var downs = ["down1", "down2", "down3", "down4", "down5", "down6"];
    var found = false;
    for (var i = 0; i < downs.length; i++) {
      if (document.getElementById(downs[i]).checked) {
        found = true;
        document.getElementById("rateDownRow").style.backgroundColor = "";
        break;
      }
    }
    if (!found) {
      equipmentChecked = false;
      event.preventDefault();
      overallCheck = false;
      document.getElementById("rateDownRow").style.backgroundColor = "#8b0000";
    }

    var amens = ["amen1", "amen2", "amen3", "amen4", "amen5", "amen6"];
    var found = false;
    for (var i = 0; i < amens.length; i++) {
      if (document.getElementById(amens[i]).checked) {
        found = true;
        document.getElementById("rateAmenRow").style.backgroundColor = "";
        break;
      }
    }
    if (!found) {
      amenitiesChecked = false;
      event.preventDefault();
      overallCheck = false;
      document.getElementById("rateAmenRow").style.backgroundColor = "#8b0000";
    }

    var overalls = [
      "overall1",
      "overall2",
      "overall3",
      "overall4",
      "overall5",
      "overall6",
    ];
    var found = false;
    for (var i = 0; i < overalls.length; i++) {
      if (document.getElementById(overalls[i]).checked) {
        found = true;
        document.getElementById("rateOverallRow").style.backgroundColor = "";
        break;
      }
    }
    if (!found) {
      overallRatingChecked = false;
      event.preventDefault();
      overallCheck = false;
      document.getElementById("rateOverallRow").style.backgroundColor =
        "#8b0000";
    }

    if (!overallCheck) {
      //invalid submission - show popup that tell user missing fields
      var newLine = "\r\n";
      var msg =
        "𝗣𝗹𝗲𝗮𝘀𝗲 𝗳𝗶𝗹𝗹 𝗶𝗻 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴 𝗿𝗲𝗾𝘂𝗶𝗿𝗲𝗱 𝗳𝗶𝗲𝗹𝗱𝘀 (𝗵𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝗲𝗱 𝗶𝗻 𝗿𝗲𝗱):";
      msg += newLine;
      msg += "-----------------------------------------------------------";
      msg += newLine;

      if (!gymChecked) {
        msg += "- Select a Gym";
        msg += newLine;
      }

      if (!cleanlinessChecked) {
        msg += "- Rate Cleanliness";
        msg += newLine;
      }

      if (!qualityChecked) {
        msg += "- Rate Quality of Service";
        msg += newLine;
      }

      if (!equipmentChecked) {
        msg += "- Rate Equipment Downtime";
        msg += newLine;
      }

      if (!amenitiesChecked) {
        msg += "- Rate Amenities";
        msg += newLine;
      }

      if (!overallRatingChecked) {
        msg += "- Overall Rating";
        msg += newLine;
      }

      alert(msg);
    }
  }


  clearFields(event) {
    //Clear gym selection radio buttons
    document.getElementById("skylineRadio").checked = false;
    document.getElementById("racRadio").checked = false;
    document.getElementById("afcRadio").checked = false;

    //Clear text area box
    document.getElementById("textArea").value = "";

    //Clear all rating table radio buttons
    //This is a list of all radio buttons for 'Rate Cleanliness'
    var cleans = ["clean1", "clean2", "clean3", "clean4", "clean5", "clean6"];
    for (var i = 0; i < cleans.length; i++) {
      document.getElementById(cleans[i]).checked = false;
    }

    //This is a list of all radio buttons for 'Rate Quality of Service'
    var quals = ["qual1", "qual2", "qual3", "qual4", "qual5", "qual6"];
    for (var i = 0; i < quals.length; i++) {
      document.getElementById(quals[i]).checked = false;
    }

    //This is a list of all radio buttons for 'Rate Equipment Downtime'
    var downs = ["down1", "down2", "down3", "down4", "down5", "down6"];
    for (var i = 0; i < downs.length; i++) {
      document.getElementById(downs[i]).checked = false;
    }

    //This is a list of all radio buttons for 'Rate Amenities'
    var amens = ["amen1", "amen2", "amen3", "amen4", "amen5", "amen6"];
    for (var i = 0; i < amens.length; i++) {
      document.getElementById(amens[i]).checked = false;
    }

    //This is a list of all radio buttons for 'Overall Rating'
    var overalls = [
      "overall1",
      "overall2",
      "overall3",
      "overall4",
      "overall5",
      "overall6",
    ];
    for (var i = 0; i < overalls.length; i++) {
      document.getElementById(overalls[i]).checked = false;
    }

    // reset backs to empty states
    this.setState(this.initialState);

    //reset coloring
    document.getElementById("selectGym").style.color = "";
    document.getElementById("rateCleanRow").style.backgroundColor = "";
    document.getElementById("rateQualRow").style.backgroundColor = "";
    document.getElementById("rateDownRow").style.backgroundColor = "";
    document.getElementById("rateAmenRow").style.backgroundColor = "";
    document.getElementById("rateOverallRow").style.backgroundColor = "";

    event.preventDefault();
  }



  render() {
    return (
      <form
        method="post"
        id="userform"
        action="http://swe432assignment8-env.eba-cuu4cmz2.us-east-1.elasticbeanstalk.com/EchoRatingsServlet"
      >
        <p id="selectGym">
          <u>Select a Gym:</u>
        </p>

        <table id="gymChoice" align="center">
          <tbody>
            <tr></tr>
            <tr>
              <td align="center">
                <b>Skyline</b>
              </td>
              <td>
                <input
                  id="skylineRadio"
                  type="radio"
                  name="Gym Selected"
                  defaultValue="Skyline"
                  data-col={1}
                  checked={this.state.gym === "Skyline"}
                  onChange={this.handleChangeGym}
                />
              </td>
            </tr>
            <tr>
              <td align="CENTER">
                <b>Recreation and Athletic Complex (RAC)</b>
              </td>
              <td>
                <input
                  id="racRadio"
                  type="radio"
                  name="Gym Selected"
                  defaultValue="RAC"
                  data-col={1}
                  checked={this.state.gym === "RAC"}
                  onChange={this.handleChangeGym}
                />
              </td>
            </tr>
            <tr>
              <td align="CENTER">
                <b>Aquatic and Fitness Center (AFC)</b>
              </td>
              <td>
                <input
                  id="afcRadio"
                  type="radio"
                  name="Gym Selected"
                  defaultValue="AFC"
                  data-col={1}
                  checked={this.state.gym === "AFC"}
                  onChange={this.handleChangeGym}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <b>
          <p id="textScale" align="left">
            1=Very Disappointed | 3=Neutral | 5=Very Impressed | N/A=Don't Know
          </p>
        </b>
        <b>
          <p id="textScale2" align="left">
            Please rate your satisfaction of the following criteria:
          </p>
        </b>
        <table id="mainTable" align="left">
          <tbody>
            <tr>
              <th />
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th id="NA">N/A</th>
            </tr>
            <tr id="rateCleanRow">
              <td id="rateClean" align="center">
                <b>Rate Cleanliness</b>
              </td>
              <td>
                <input
                  id="clean1"
                  type="radio"
                  name="Cleanliness"
                  defaultValue="Rating: 1"
                  data-col={1}
                  checked={this.state.cleanliness === "Rating: 1"}
                  onChange={this.handleChangeClean}
                />
              </td>
              <td>
                <input
                  id="clean2"
                  type="radio"
                  name="Cleanliness"
                  defaultValue="Rating: 2"
                  data-col={2}
                  checked={this.state.cleanliness === "Rating: 2"}
                  onChange={this.handleChangeClean}
                />
              </td>
              <td>
                <input
                  id="clean3"
                  type="radio"
                  name="Cleanliness"
                  defaultValue="Rating: 3"
                  data-col={3}
                  checked={this.state.cleanliness === "Rating: 3"}
                  onChange={this.handleChangeClean}
                />
              </td>
              <td>
                <input
                  id="clean4"
                  type="radio"
                  name="Cleanliness"
                  defaultValue="Rating: 4"
                  data-col={4}
                  checked={this.state.cleanliness === "Rating: 4"}
                  onChange={this.handleChangeClean}
                />
              </td>
              <td>
                <input
                  id="clean5"
                  type="radio"
                  name="Cleanliness"
                  defaultValue="Rating: 5"
                  data-col={5}
                  checked={this.state.cleanliness === "Rating: 5"}
                  onChange={this.handleChangeClean}
                />
              </td>
              <td>
                <input
                  id="clean6"
                  type="radio"
                  name="Cleanliness"
                  defaultValue="Rating: N/A"
                  data-col={6}
                  checked={this.state.cleanliness === "Rating: N/A"}
                  onChange={this.handleChangeClean}
                />
              </td>
            </tr>
            <tr id="rateQualRow">
              <td id="rateQual" align="center">
                <b>Rate Quality of Service</b>
              </td>
              <td>
                <input
                  id="qual1"
                  type="radio"
                  name="Quality of Service"
                  defaultValue="Rating: 1"
                  data-col={1}
                  checked={this.state.qualService === "Rating: 1"}
                  onChange={this.handleChangeQual}
                />
              </td>
              <td>
                <input
                  id="qual2"
                  type="radio"
                  name="Quality of Service"
                  defaultValue="Rating: 2"
                  data-col={2}
                  checked={this.state.qualService === "Rating: 2"}
                  onChange={this.handleChangeQual}
                />
              </td>
              <td>
                <input
                  id="qual3"
                  type="radio"
                  name="Quality of Service"
                  defaultValue="Rating: 3"
                  data-col={3}
                  checked={this.state.qualService === "Rating: 3"}
                  onChange={this.handleChangeQual}
                />
              </td>
              <td>
                <input
                  id="qual4"
                  type="radio"
                  name="Quality of Service"
                  defaultValue="Rating: 4"
                  data-col={4}
                  checked={this.state.qualService === "Rating: 4"}
                  onChange={this.handleChangeQual}
                />
              </td>
              <td>
                <input
                  id="qual5"
                  type="radio"
                  name="Quality of Service"
                  defaultValue="Rating: 5"
                  data-col={5}
                  checked={this.state.qualService === "Rating: 5"}
                  onChange={this.handleChangeQual}
                />
              </td>
              <td>
                <input
                  id="qual6"
                  type="radio"
                  name="Quality of Service"
                  defaultValue="Rating: N/A"
                  data-col={6}
                  checked={this.state.qualService === "Rating: N/A"}
                  onChange={this.handleChangeQual}
                />
              </td>
            </tr>
            <tr id="rateDownRow">
              <td id="rateDown" align="center">
                <b>Rate Equipment Downtime</b>
              </td>
              <td>
                <input
                  id="down1"
                  type="radio"
                  name="Equipment Downtime"
                  defaultValue="Rating: 1"
                  data-col={1}
                  checked={this.state.equipDowntime === "Rating: 1"}
                  onChange={this.handleChangeEquip}
                />
              </td>
              <td>
                <input
                  id="down2"
                  type="radio"
                  name="Equipment Downtime"
                  defaultValue="Rating: 2"
                  data-col={2}
                  checked={this.state.equipDowntime === "Rating: 2"}
                  onChange={this.handleChangeEquip}
                />
              </td>
              <td>
                <input
                  id="down3"
                  type="radio"
                  name="Equipment Downtime"
                  defaultValue="Rating: 3"
                  data-col={3}
                  checked={this.state.equipDowntime === "Rating: 3"}
                  onChange={this.handleChangeEquip}
                />
              </td>
              <td>
                <input
                  id="down4"
                  type="radio"
                  name="Equipment Downtime"
                  defaultValue="Rating: 4"
                  data-col={4}
                  checked={this.state.equipDowntime === "Rating: 4"}
                  onChange={this.handleChangeEquip}
                />
              </td>
              <td>
                <input
                  id="down5"
                  type="radio"
                  name="Equipment Downtime"
                  defaultValue="Rating: 5"
                  data-col={5}
                  checked={this.state.equipDowntime === "Rating: 5"}
                  onChange={this.handleChangeEquip}
                />
              </td>
              <td>
                <input
                  id="down6"
                  type="radio"
                  name="Equipment Downtime"
                  defaultValue="Rating: N/A"
                  data-col={6}
                  checked={this.state.equipDowntime === "Rating: N/A"}
                  onChange={this.handleChangeEquip}
                />
              </td>
            </tr>
            <tr id="rateAmenRow">
              <td id="rateAmen" align="center">
                <b>Rate Amenities</b>
              </td>
              <td>
                <input
                  id="amen1"
                  type="radio"
                  name="Amenities"
                  defaultValue="Rating: 1"
                  data-col={1}
                  checked={this.state.amenities === "Rating: 1"}
                  onChange={this.handleChangeAmen}
                />
              </td>
              <td>
                <input
                  id="amen2"
                  type="radio"
                  name="Amenities"
                  defaultValue="Rating: 2"
                  data-col={2}
                  checked={this.state.amenities === "Rating: 2"}
                  onChange={this.handleChangeAmen}
                />
              </td>
              <td>
                <input
                  id="amen3"
                  type="radio"
                  name="Amenities"
                  defaultValue="Rating: 3"
                  data-col={3}
                  checked={this.state.amenities === "Rating: 3"}
                  onChange={this.handleChangeAmen}
                />
              </td>
              <td>
                <input
                  id="amen4"
                  type="radio"
                  name="Amenities"
                  defaultValue="Rating: 4"
                  data-col={4}
                  checked={this.state.amenities === "Rating: 4"}
                  onChange={this.handleChangeAmen}
                />
              </td>
              <td>
                <input
                  id="amen5"
                  type="radio"
                  name="Amenities"
                  defaultValue="Rating: 5"
                  data-col={5}
                  checked={this.state.amenities === "Rating: 5"}
                  onChange={this.handleChangeAmen}
                />
              </td>
              <td>
                <input
                  id="amen6"
                  type="radio"
                  name="Amenities"
                  defaultValue="Rating: N/A"
                  data-col={6}
                  checked={this.state.amenities === "Rating: N/A"}
                  onChange={this.handleChangeAmen}
                />
              </td>
            </tr>
            <tr id="rateOverallRow">
              <td id="rateOverall" align="CENTER">
                <b>Overall Rating</b>
              </td>
              <td>
                <input
                  id="overall1"
                  type="radio"
                  name="Overall Rating"
                  defaultValue="Rating: 1"
                  data-col={1}
                  checked={this.state.overall === "Rating: 1"}
                  onChange={this.handleChangeOverall}
                />
              </td>
              <td>
                <input
                  id="overall2"
                  type="radio"
                  name="Overall Rating"
                  defaultValue="Rating: 2"
                  data-col={2}
                  checked={this.state.overall === "Rating: 2"}
                  onChange={this.handleChangeOverall}
                />
              </td>
              <td>
                <input
                  id="overall3"
                  type="radio"
                  name="Overall Rating"
                  defaultValue="Rating: 3"
                  data-col={3}
                  checked={this.state.overall === "Rating: 3"}
                  onChange={this.handleChangeOverall}
                />
              </td>
              <td>
                <input
                  id="overall4"
                  type="radio"
                  name="Overall Rating"
                  defaultValue="Rating: 4"
                  data-col={4}
                  checked={this.state.overall === "Rating: 4"}
                  onChange={this.handleChangeOverall}
                />
              </td>
              <td>
                <input
                  id="overall5"
                  type="radio"
                  name="Overall Rating"
                  defaultValue="Rating: 5"
                  data-col={5}
                  checked={this.state.overall === "Rating: 5"}
                  onChange={this.handleChangeOverall}
                />
              </td>
              <td>
                <input
                  id="overall6"
                  type="radio"
                  name="Overall Rating"
                  defaultValue="Rating: N/A"
                  data-col={6}
                  checked={this.state.overall === "Rating: N/A"}
                  onChange={this.handleChangeOverall}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <textarea
          id="textArea"
          rows={10}
          cols={70}
          name="Additional Comments"
          placeholder="Write any additional comments here (optional)..."
          maxLength={150}
          defaultValue={""}
          value={this.state.text}
          onChange={this.handleChangeText}
        />

        <button id="clearButton" onClick={this.clearFields} className="button">
          Clear All
        </button>

        <button
          id="submitButton"
          onClick={this.handleSubmit}
          className="button"
        >
          <span>Submit All</span>
        </button>
      </form>
    );
  }
}
