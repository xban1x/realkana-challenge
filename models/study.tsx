import { types, getParent, getSnapshot } from "mobx-state-tree";
import Sylabble from "./sylabble";
import { IRootStore } from "./rootStore";
import { FormEvent } from "react";

const ShownSylabble = types.model("StudySylabble", {
  shown: false
});

const Study = types
  .model("Study", {
    sylabbles: types.array(
      types.compose(
        "StudySylabble",
        Sylabble,
        ShownSylabble
      )
    ),
    selected: types.maybe(
      types.compose(
        "StudySylabble",
        Sylabble,
        ShownSylabble
      )
    ),
    shownCount: 0,
    correctCount: 0,
    wrong: false,
    help: false
  })
  .views(self => ({
    hasSylabbles() {
      return self.sylabbles.length > 0;
    }
  }))
  .actions(self => ({
    clear() {
      self.sylabbles.forEach(sylabble => (sylabble.shown = false));
      self.shownCount = 0;
      self.correctCount = 0;
    },
    randomSylabble() {
      if (self.sylabbles.length === 0) {
        return;
      }
      const available = self.sylabbles.filter(sylabble => !sylabble.shown);
      if (available.length === 0) {
        return;
      }
      const randomIndex = Math.floor(
        Math.random() * Math.floor(available.length)
      );
      const selected = available[randomIndex];
      // Reset State
      self.wrong = false;
      self.help = false;
      selected.shown = true;
      self.shownCount++;
      self.selected = getSnapshot(selected);
      return selected;
    }
  }))
  .actions(self => ({
    afterAttach() {
      getSnapshot((getParent(self) as IRootStore).alphabets).forEach(
        alphabet => {
          const sylabbles = alphabet.groups
            .filter(group => group.selected)
            .map(group => group.sylabbles)
            .reduce((sum, cur) => [...sum, ...cur], []);
          if (sylabbles.length > 0) {
            self.sylabbles.push(...sylabbles.filter(sylabble => sylabble.word));
          }
        }
      );
      self.randomSylabble();
    },
    showHelp() {
      self.wrong = true;
      self.help = true;
    },
    answer(event: FormEvent<HTMLInputElement>) {
      if (!event.target || !self.selected) {
        return;
      }
      const word = event.currentTarget.value;
      if (!word || word === "" || word.length !== self.selected.word.length) {
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
      event.currentTarget.value = "";
      self.randomSylabble();
    }
  }));

export default Study;
