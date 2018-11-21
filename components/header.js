import Link from "next/link";
import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/?alphabet=Hiragana">
          <a>Hirakana</a>
        </Link>
        <Link href="/?alphabet=Katakana">
          <a>Katagana</a>
        </Link>
        <Link href="/study">
          <a>Study</a>
        </Link>
        <style jsx>{`
          a {
            margin-right: 15px;
          }
        `}</style>
      </Fragment>
    );
  }
}
