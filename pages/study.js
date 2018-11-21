import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Layout from "../components/layout";

class StudyPage extends Component {
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

  onSpaceDown(event) {
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
    return (
      <Layout>
        {study.sylabbles.length > 0 ? (
          <Fragment>
            <div>{study.selected && study.selected.character}</div>

            {study.selected && study.help && <div>{study.selected.word}</div>}

            {study.wrong && <div>WRONG</div>}

            <input
              type="text"
              onChange={event => study.answer(event.nativeEvent)}
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
