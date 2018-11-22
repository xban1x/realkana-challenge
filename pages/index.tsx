import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Layout from "../components/layout";
import Alphabet from "../components/alphabet";
import { NextContext } from "next";
import { IRootStoreProps } from "../models/rootStore";

interface IndexProps extends IRootStoreProps {
  query: Record<string, string>;
}

class IndexPage extends Component<IndexProps> {
  static getInitialProps({ query }: NextContext) {
    return { query };
  }

  render() {
    if (!this.props.query) {
      return <Layout />;
    }
    return (
      <Layout>
        <Alphabet
          alphabet={this.props.rootStore.getAlphabet(this.props.query.alphabet)}
        />
      </Layout>
    );
  }
}

export default inject("rootStore")(observer(IndexPage));
