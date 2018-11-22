import * as React from "react";
import App, { AppComponentContext, Container } from "next/app";
import { Provider } from "mobx-react";
import RootStore from "../models/rootStore";
import Hiragana from "./../hiragana.json";
import Katakana from "./../katakana.json";

const rootStore = RootStore.create({
  alphabets: [Hiragana, Katakana]
});

class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx
  }: AppComponentContext): Promise<{ pageProps: Record<string, any> }> {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

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

export default MyApp;
