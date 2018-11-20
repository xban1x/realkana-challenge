import Link from "next/link";
import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/hirakana">
          <a>Hirakana</a>
        </Link>
        <Link href="/katagana">
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
