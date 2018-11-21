import { types, getParent, getSnapshot } from "mobx-state-tree";
import Sylabble from "./sylabble";

const Study = types
  .model("Study", {
    sylabbles: types.array(Sylabble, []),
    selected: types.maybe(Sylabble),
    shownCount: 0,
    correctCount: 0,
    wrong: false,
    help: false
  })
  .actions(self => ({
    afterAttach() {
      getSnapshot(getParent(self).alphabets).forEach(alphabet => {
        const sylabbles = alphabet.groups
          .filter(group => group.selected)
          .map(group => group.sylabbles)
          .reduce((sum, cur) => [...sum, ...cur], []);
        if (sylabbles.length > 0) {
          self.sylabbles.push(...sylabbles.filter(sylabble => sylabble.word));
        }
      });
      self.randomSylabble();
    },
    showHelp() {
      self.wrong = true;
      self.help = true;
    },
    answer(event) {
      const word = event.target.value;
      if (word === "") {
        return;
      }
      if (word.length !== self.selected.word.length) {
        return;
      }
      if (word.toLowerCase() !== self.selected.word.toLowerCase()) {
        self.wrong = true;
        return;
      }
      // If user already got through all sylabbles just reset and start from beggining
      if (self.sylabbles.length === self.shownCount) {
        self.clear();
      } else if (!self.wrong) {
        self.correctCount++;
      }
      event.target.value = "";
      self.randomSylabble();
    },
    randomSylabble() {
      const length = self.sylabbles.length;
      if (length === 0) {
        return;
      }
      const randomIndex = Math.floor(Math.random() * Math.floor(length));
      const selected = self.sylabbles[randomIndex];
      // Do not show sylabble if it has already been shown
      if (selected.shown) {
        return self.randomSylabble();
      }
      // Reset State
      self.wrong = false;
      self.help = false;
      selected.shown = true;
      self.shownCount++;
      self.selected = getSnapshot(selected);
      return selected;
    },
    clear() {
      self.sylabbles.forEach(sylabble => (sylabble.shown = false));
      self.shownCount = 0;
      self.correctCount = 0;
    }
  }));

export default Study;
