import "../styles.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div class="parent">
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
