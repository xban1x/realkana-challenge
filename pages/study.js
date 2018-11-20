import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../components/layout";
import { studyClear, studyShow, studyHelp, studyAnswer } from "../actions";

class StudyPage extends Component {
  chars = [];

  componentWillMount() {
    this.props.alphabets.forEach(alphabet =>
      alphabet.groups
        .filter(group => group.checked)
        .map(group => group.sylabbles)
        .forEach(g => (this.chars = [...this.chars, ...g]))
    );
    this.getRandomChar();
  }

  componentDidMount() {
    document.addEventListener(
      "keydown",
      event => this.onSpaceDown(event),
      false
    );
  }

  onSpaceDown(event) {
    if (this.props.hint) {
      return;
    }
    if (event.keyCode !== 32) {
      return;
    }
    this.props.help();
  }

  onAnswer(event) {
    this.props.answer(event.nativeEvent.target.value);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  getRandomChar() {
    this.help = false;
    const length = this.chars.length;
    const randomIndex = Math.floor(Math.random() * Math.floor(length));
    const char = this.chars[randomIndex];
    if (this.props.shown.indexOf(char) === -1) {
      this.props.show(char);
      return char;
    } else {
      return this.getRandomChar();
    }
  }

  render() {
    return (
      <Layout>
        {this.props.char && <div>{this.props.char.sylabble}</div>}
        {this.props.char && this.props.hint && (
          <div>{this.props.char.word}</div>
        )}
        {this.props.wrong && <div>WRONG</div>}
        <input type="text" onChange={this.onAnswer.bind(this)} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  alphabets: [state.katagana, state.hirakana],
  shown: state.study.shown,
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
