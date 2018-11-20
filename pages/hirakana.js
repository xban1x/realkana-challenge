import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../components/layout";
import AlphabetTable from "../components/alphabet_table";
import { hirakanaSelectToggle } from "../actions";

class HirakanaPage extends Component {
  render() {
    return (
      <Layout>
        <AlphabetTable
          alphabet={this.props.alphabet}
          onSelect={this.props.selectToggle.bind(this)}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  alphabet: state.hirakana
});

const mapDispatchToProps = dispatch => {
  return {
    selectToggle: index => dispatch(hirakanaSelectToggle(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HirakanaPage);
