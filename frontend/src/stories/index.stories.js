import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SearchBar from "../components/SearchBar"
import CustomizedSlider from "../components/CustomizedSlider"
import Delete from "../components/General/Buttons/Delete"
import SaveTrip from "../components/General/Buttons/SaveTrip"
import Submit from "../components/General/Buttons/Submit"
import AddButton from "../components/General/Buttons/AddButton"
import EditButton from "../components/General/Buttons/EditButton"
import CircularDeterminate from "../components/CircularDeterminate"
import ButtonAppBar from "../components/NavBar"
import DatePickers from "../components/DatePickers"


// Nav Bar Stories

storiesOf("NavBar", module) 
  .add("NavBar", () => <ButtonAppBar></ButtonAppBar>)

// SearchBar Stories
storiesOf("SearchBar", module)
  .add("Display", () => <SearchBar onChange={action()}></SearchBar>)



// Button Stories
storiesOf("Buttons", module) 
  .add("Delete", () => <Delete onClick={action()}></Delete>)
  .add("SaveTrip", () => <SaveTrip onClick={action()}></SaveTrip>)
  .add("Submit", () => <Submit onClick={action()}></Submit>)
  .add("AddButton", () => <AddButton onClick={action()}></AddButton>)
  .add("EditButton", () => <EditButton onClick={action()}></EditButton>)


// Loading Animation Stories
storiesOf("Loading Animations", module)
  .add("CircularDeterminate", () => <CircularDeterminate></CircularDeterminate>)
  

// The Main Event Stories
storiesOf("The Main Event", module)
  .add("Slider", () => <CustomizedSlider></CustomizedSlider>)


// Date Stories
storiesOf("Date", module)
 .add("DatePickers", () => <DatePickers></DatePickers>)
