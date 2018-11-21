import { types } from "mobx-state-tree";
import SylabbleGroup from "./sylabbleGroup";

const Alphabet = types
  .model("Alphabet", {
    name: types.string,
    groups: types.array(SylabbleGroup)
  })
  .views(self => ({
    selectedGroups() {
      return self.groups.filter(group => group.selected);
    }
  }));

export default Alphabet;
