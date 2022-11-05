import { useState } from "react";
import Trivia from "./Trivia";
import NumberSearch from "./NumberSearch";
import 'tachyons'

export default function NumberTrivia() {
  const [trivia, setTrivia] = useState("Hit Fetch!");
  const [mathFact, setMathFact] = useState("Hit Fetch!");
  const [number, setNumber] = useState(0);

  function fetchTriviaAndMathFacts() {
    fetch(`http://numbersapi.com/${number}/trivia`)
      .then((data) => data.text())
      .then((trivia) => setTrivia(trivia));

    fetch(`http://numbersapi.com/${number}/math`)
      .then((data) => data.text())
      .then((mathFact) => setMathFact(mathFact));
  }

  function getNumber(event) {
    setNumber(event.target.value);
  }

  function enterButton(event) {
    if (event.key === "Enter") {
      fetchTriviaAndMathFacts();
    }
  }

  return (
    <div>
      <h2>Number Trivia Component</h2>
      <NumberSearch getNumberFn={getNumber} enterButtonFn={enterButton} fetchTriviaAndMathsFactsFn={fetchTriviaAndMathFacts} />
      <Trivia title={"Trivia"} text={trivia} />
      <Trivia title={"Math Fact"} text={mathFact} />
    </div>
  );
}
