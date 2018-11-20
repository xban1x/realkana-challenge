import Hirakana from "../hirakana.json";

const hirakana = (state = Hirakana, action) => {
  switch (action.type) {
    case "HIRAKANA_SELECT_TOGGLE": {
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

export default hirakana;
