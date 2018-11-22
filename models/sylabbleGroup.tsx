import { types, Instance } from "mobx-state-tree";
import Sylabble from "./sylabble";

const SylabbleGroup = types
  .model("SylabbleGroup", {
    sylabbles: types.array(Sylabble),
    selected: false
  })
  .actions(self => ({
    toggleSelect() {
      self.selected = !self.selected;
    }
  }));

export interface ISylabbleGroup extends Instance<typeof SylabbleGroup> {}

export interface ISylabbleGroupProps {
  group: ISylabbleGroup;
}

export default SylabbleGroup;
