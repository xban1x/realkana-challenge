const defaultState = {
  shown: [],
  char: { word: "", sylabble: "" },
  correctCount: 0,
  correct: false,
  wrong: false,
  help: false
};

const study = (state = defaultState, action) => {
  switch (action.type) {
    case "STUDY_ANSWER": {
      const word = state.char.word;
      const payload = action.payload;
      if (word.length !== payload.length) {
        return state;
      }
      if (word === payload) {
        return {
          ...state,
          correct: true,
          correctCount: state.wrong ? state.correctCount : ++state.correctCount
        };
      }
      return { ...state, wrong: true };
    }
    case "STUDY_SHOW": {
      return {
        ...state,
        char: action.payload,
        shown: [...state.shown, action.payload],
        help: false,
        wrong: false
      };
    }
    case "STUDY_HELP": {
      return { ...state, help: true, wrong: true };
    }
    case "STUDY_CLEAR": {
      return defaultState;
    }
    default: {
      return state;
    }
  }
};

export default study;
