import Katagana from "../katagana.json";

const katagana = (state = Katagana, action) => {
  switch (action.type) {
    case "KATAGANA_SELECT_TOGGLE": {
      const newState = { ...state };
      const currentState = newState.groups[action.payload].checked;
      newState.groups[action.payload].checked = !currentState;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default katagana;
