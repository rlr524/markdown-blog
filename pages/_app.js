import React from "react";
import App from "next/app";
import "../styles/tailwind.css";

class Blog extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default Blog;
