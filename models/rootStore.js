import { types, destroy } from "mobx-state-tree";
import Alphabet from "./alphabet";
import Study from "./study";

const RootStore = types
  .model("RootStore", {
    alphabets: types.array(Alphabet),
    study: types.maybe(Study)
  })
  .actions(self => ({
    getAlphabet(name) {
      return self.alphabets.filter(alphabet => alphabet.name === name)[0];
    },
    createStudy() {
      self.study = Study.create();
    },
    removeStudy() {
      destroy(self.study);
    }
  }));

export default RootStore;
