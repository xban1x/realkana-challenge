export const hirakanaSelectToggle = index => ({
  type: "HIRAKANA_SELECT_TOGGLE",
  payload: index
});

export const kataganaSelectToggle = index => ({
  type: "KATAGANA_SELECT_TOGGLE",
  payload: index
});

export const studyClear = () => ({
  type: "STUDY_CLEAR"
});

export const studyHelp = () => ({
  type: "STUDY_HELP"
});

export const studyShow = char => ({
  type: "STUDY_SHOW",
  payload: char
});

export const studyAnswer = word => ({
  type: "STUDY_ANSWER",
  payload: word
});
