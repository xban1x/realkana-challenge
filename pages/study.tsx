import React, { Component, Fragment, FormEvent } from "react";
import { inject, observer } from "mobx-react";
import Layout from "./../components/layout";
import { IRootStoreProps } from "../models/rootStore";

class StudyPage extends Component<IRootStoreProps> {
  componentWillMount() {
    this.props.rootStore.createStudy();
  }

  componentWillUnmount() {
    this.props.rootStore.removeStudy();
  }

  componentDidMount() {
    document.addEventListener(
      "keydown",
      event => this.onSpaceDown(event),
      false
    );
  }

  onSpaceDown(event: KeyboardEvent) {
    const study = this.props.rootStore.study;
    if (!study) {
      return;
    }
    if (study.help) {
      if (event.keyCode === 32) {
        event.preventDefault();
      }
      return;
    }
    if (event.keyCode !== 32) {
      return;
    }
    event.preventDefault();
    study.showHelp();
  }

  render() {
    const study = this.props.rootStore.study;
    if (!study) {
      return <Layout />;
    }
    return (
      <Layout>
        {study.hasSylabbles() ? (
          <Fragment>
            <div>{study.selected && study.selected.character}</div>

            {study.selected && study.help && <div>{study.selected.word}</div>}

            {study.wrong && <div>WRONG</div>}

            <input
              type="text"
              onChange={(event: FormEvent<HTMLInputElement>) =>
                study.answer(event)
              }
            />

            <Fragment>
              <div>SHOWN: {study.shownCount}</div>
              <div>CORRECT: {study.correctCount}</div>
            </Fragment>
          </Fragment>
        ) : (
          <Fragment>Select a group to Study</Fragment>
        )}
      </Layout>
    );
  }
}

export default inject("rootStore")(observer(StudyPage));
