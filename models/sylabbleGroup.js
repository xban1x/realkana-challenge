import { types } from "mobx-state-tree";
import Sylabble from "./sylabble";

const SylabbleGroup = types
  .model("SylabbleGroup", {
    sylabbles: types.array(Sylabble),
    selected: false
  })
  .actions(self => ({
    toggleSelect() {
      self.selected = !self.selected;
      console.log(self);
    }
  }));

export default SylabbleGroup;
