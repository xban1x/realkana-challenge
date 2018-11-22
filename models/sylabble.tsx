import { types, Instance } from "mobx-state-tree";

const Sylabble = types.model("Sylabble", {
  word: "",
  character: ""
});

export interface ISylabble extends Instance<typeof Sylabble> {}

export interface ISylabbleProps {
  sylabble: ISylabble;
}

export default Sylabble;
