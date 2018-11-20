import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Layout from "../components/layout";
import { studyClear, studyShow, studyHelp, studyAnswer } from "../actions";

class StudyPage extends Component {
  chars = [];
  answer;

  componentWillMount() {
    this.props.alphabets.forEach(alphabet => {
      {
        console.log(alphabet);
        alphabet.groups
          .filter(group => group.checked)
          .map(group => group.sylabbles)
          .forEach(g => {
            this.chars = [...this.chars, ...g];
            console.log(this.chars);
          });
      }
    });
    this.getRandomChar();
  }

  componentDidMount() {
    document.addEventListener(
      "keydown",
      event => this.onSpaceDown(event),
      false
    );
  }

  componentWillUnmount() {
    this.props.clear();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.correct) {
      this.answer.value = "";
      this.getRandomChar();
    }
  }

  onSpaceDown(event) {
    if (this.props.hint) {
      return;
    }
    if (event.keyCode !== 32) {
      return;
    }
    event.preventDefault();
    this.props.help();
  }

  onAnswer(event) {
    const value = event.nativeEvent.target.value;
    if (value === "") {
      return;
    }
    this.props.answer(value);
  }

  getRandomChar() {
    const length = this.chars.length;
    const randomIndex = Math.floor(Math.random() * Math.floor(length));
    const char = this.chars[randomIndex];
    this.props.show(char);
    return char;
  }

  render() {
    return (
      <Layout>
        {this.chars.length > 0 ? (
          <Fragment>
            <div>{this.props.char.sylabble}</div>

            {this.props.hint && <div>{this.props.char.word}</div>}

            {this.props.wrong && <div>WRONG</div>}

            <input
              type="text"
              ref={node => (this.answer = node)}
              onChange={this.onAnswer.bind(this)}
            />

            <Fragment>
              <div>SHOWN: {this.props.shown.length}</div>
              <div>CORRECT: {this.props.correctCount}</div>
            </Fragment>
          </Fragment>
        ) : (
          <Fragment>Select a group to Study</Fragment>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  alphabets: [state.katagana, state.hirakana],
  shown: state.study.shown,
  correct: state.study.correct,
  correctCount: state.study.correctCount,
  char: state.study.char,
  wrong: state.study.wrong,
  hint: state.study.help
});

const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(studyClear()),
    show: char => dispatch(studyShow(char)),
    help: () => dispatch(studyHelp()),
    answer: word => dispatch(studyAnswer(word))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyPage);
