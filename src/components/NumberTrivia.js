import { useState } from "react";
import Trivia from "./Trivia";
import NumberSearch from "./NumberSearch";
import 'tachyons'

export default function NumberTrivia() {
  const [trivia, setTrivia] = useState("Hit Fetch!");
  const [mathFact, setMathFact] = useState("Hit Fetch!");
  const [number, setNumber] = useState(0);

  
  function fetchTriviaAndMathFactsFun(fetchType,value,setValue) {
    fetch(`http://numbersapi.com/${number}/${fetchType}`)
      .then((data) => data.text())
      .then((value) => setValue(value))
      .catch(error => setTrivia(error.name+": "+error.message));
  }

  function getNumber(event) {
    setNumber(event.target.value);
  }

  function buttonEvent(event) {
    if (event.key === "Enter" || event.type === "click") {
      fetchTriviaAndMathFactsFun("trivia",trivia, setTrivia);
      fetchTriviaAndMathFactsFun("math",mathFact, setMathFact);
    }
  }
  
  return (
    <div>
      <h2 className="tc">Number Trivia Component</h2>
      <NumberSearch getNumberFn={getNumber} buttonEventFn={buttonEvent}/>
      <Trivia title={"Trivia"} text={trivia} />
      {<Trivia title={"Math Fact"} text={mathFact} />}
    </div>
  );
}
