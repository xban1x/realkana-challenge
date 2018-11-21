import { types, getParent } from "mobx-state-tree";
import Sylabble from "./sylabble";

const Study = types
  .model("Study", {
    sylabbles: types.array(Sylabble),
    selected: types.maybe(Sylabble),
    shown: types.array(Sylabble),
    correctCount: 0,
    wrong: false,
    help: false
  })
  .views(self => ({
    shownCount() {
      return self.shown.length;
    }
  }))
  .actions(self => ({
    help() {
      self.wrong = true;
      self.help = true;
    },
    answer(word) {
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
      if (self.sylabbles.length === self.shown.length) {
        self.shown = [];
      }
      self.correctCount++;
      self.randomSylabble();
    },
    randomSylabble() {
      const length = self.sylabbles.length;
      const randomIndex = Math.floor(Math.random() * Math.floor(length));
      const selected = self.sylabbles[randomIndex];
      // Do not show sylabble if it has already been shown
      if (self.shown.indexOf(selected) > -1) {
        return self.randomSylabble();
      }
      // Reset State
      self.wrong = false;
      self.help = false;
      // Set up the new sylabble
      self.shown.push(selected);
      self.selected = selected;
      return selected;
    }
  }));

export default Study;
