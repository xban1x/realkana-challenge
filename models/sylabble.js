import { types } from "mobx-state-tree";

const Sylabble = types.model("Sylabble", {
  word: "",
  character: ""
});

export default Sylabble;
