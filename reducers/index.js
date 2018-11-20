import { combineReducers } from "redux";

import hirakana from "./hirakana";
import katagana from "./katagana";
import study from "./study";

export default combineReducers({ hirakana, katagana, study });
