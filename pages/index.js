import React, { Component } from "react";
import { inject } from "mobx-react";
import Layout from "../components/layout";
import Alphabet from "../components/alphabet";

class IndexPage extends Component {
  static getInitialProps({ query }) {
    return { query };
  }

  render() {
    return (
      <Layout>
        <Alphabet
          alphabet={this.props.rootStore.getAlphabet(this.props.query.alphabet)}
        />
      </Layout>
    );
  }
}

export default inject("rootStore")(IndexPage);
