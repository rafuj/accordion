import React from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
