import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="container main" id="main">
        <div className="container content">
          <div className="center">
            <Nav />

            <Content />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
