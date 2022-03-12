import { combineReducers } from "redux";
import rocket from "./rocket";
import crew from "./crew";
import dragon from "./dragons";
import home from "./home";

export default combineReducers({ rocket, crew, dragon, home });
