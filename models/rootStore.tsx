import { types, destroy, Instance } from "mobx-state-tree";
import Alphabet from "./alphabet";
import Study from "./study";

const RootStore = types
  .model("RootStore", {
    alphabets: types.array(Alphabet),
    study: types.maybe(Study)
  })
  .actions(self => ({
    getAlphabet(name: string) {
      return self.alphabets.filter(alphabet => alphabet.name === name)[0];
    },
    createStudy() {
      self.study = Study.create();
    },
    removeStudy() {
      if (!self.study) {
        return;
      }
      destroy(self.study as any);
    }
  }));

export interface IRootStore extends Instance<typeof RootStore> {}

export interface IRootStoreProps {
  rootStore: IRootStore;
}

export default RootStore;
