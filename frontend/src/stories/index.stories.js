import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SearchBar from "../components/SearchBar"
import CustomizedSlider from "../components/CustomizedSlider"
import Delete from "../components/Delete"
import SaveTrip from "../components/SaveTrip"
import Submit from "../components/Submit"
import AddButton from "../components/AddButton"
import EditButton from "../components/EditButton"

// Search Stories

storiesOf("SearchBar", module)
  .add("Display", () => <SearchBar onChange={action()}></SearchBar>)


// Button Stories

storiesOf("Buttons", module) 
  .add("Delete", () => <Delete onClick={action()}></Delete>)
  .add("SaveTrip", () => <SaveTrip onClick={action()}></SaveTrip>)
  .add("Submit", () => <Submit onClick={action()}></Submit>)
  .add("AddButton", () => <AddButton onClick={action()}></AddButton>)
  .add("EditButton", () => <EditButton onClick={action()}></EditButton>)
  
storiesOf("TheMainEvent", module)
  .add("Slider", () => <CustomizedSlider></CustomizedSlider>)
