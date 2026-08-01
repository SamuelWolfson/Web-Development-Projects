import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

export default () => (
  <div>
    <Header />
    {notes.map((entry) => (
      <Note key={entry.key} title={entry.title} body={entry.content} />
    ))}
    <Footer />
  </div>
);
