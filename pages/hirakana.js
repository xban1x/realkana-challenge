import React, { Component } from "react";
import Layout from "../components/layout";
import AlphabetTable from "../components/alphabet_table";

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

export default HirakanaPage;
