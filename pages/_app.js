import React from "react";
import App, { Container } from "next/app";
import { Provider } from "mobx-react";
import RootStore from "../models/rootStore";
import Hiragana from "../hiragana.json";
import Katakana from "../katakana.json";

const rootStore = RootStore.create({
  alphabets: [Hiragana, Katakana]
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider rootStore={rootStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
