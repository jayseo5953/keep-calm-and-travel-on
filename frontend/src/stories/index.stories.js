import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SearchBar from '../components/SearchBar';

storiesOf("SearchBar", module)
.add("Display", () => ( <SearchBar />))
.add("Console Logs on Change", () => (<SearchBar onChange={action()}/>))