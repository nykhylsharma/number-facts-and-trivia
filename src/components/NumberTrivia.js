import { useState } from "react";

export default function NumberTrivia(){
    const [trivia, setTrivia] = useState('Hit Fetch!');
    const [mathFact, setMathFact] = useState('Hit Fetch!')
    let number = 0;

    
    function fetchTriviaAndMathFacts(){
        fetch(`http://numbersapi.com/${number}`)
        .then(data => data.text())
        .then(trivia => setTrivia(trivia));

        fetch(`http://numbersapi.com/${number}/math`)
        .then(data => data.text())
        .then(mathFact => setMathFact(mathFact));
    }
    function getNumber(event){
        number = event.target.value;
    }

    function enterButton(event){
        if(event.key === "Enter"){
            fetchTriviaAndMathFacts();
        }
    }

    return(
        <>
            <h2>Number Trivia Component</h2>
            <input name="Enter a number" onChange={getNumber} onKeyDown={enterButton}></input>
            <button onClick={fetchTriviaAndMathFacts}>Fetch a Trivia</button>
            <h3>Trivia: {trivia}</h3>
            {/*<button onClick={fetchMathFact}>Fetch a Math Fact</button>}*/}
            <h3>Math Fact: {mathFact}</h3>
        </>
    );
}