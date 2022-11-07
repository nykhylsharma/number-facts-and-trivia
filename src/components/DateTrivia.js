import { useState } from "react";
import Trivia from "./Trivia";
import DatePicker from "react-date-picker";
import 'tachyons';

export default function DateTrivia() {
  const [value, setValue] = useState(new Date());
  const [datetrivia, setDatetrivia] = useState("select a date");
  const [yeartrivia, setYeartrivia] = useState("select a year");


  function fetchTrivia(value) {
    setValue(value);

    fetch(`http://numbersapi.com/${value.getMonth()+1}/${value.getDate()}/date`)
      .then((data) => data.text())
      .then((datetrivia) => setDatetrivia(datetrivia))
      .catch(error => setDatetrivia(error.name+": "+error.message));

    fetch(`http://numbersapi.com/${value.getFullYear()}/year`)
      .then((data) => data.text())
      .then((yeartrivia) => setYeartrivia(yeartrivia))
      .catch(error => setYeartrivia(error.name+": "+error.message));
  }

  return (
    <div>
      <h2 className="tc">Date Trivia</h2>
      <DatePicker format="MM-dd-y" className="center" onChange={fetchTrivia} value={value} />
      <Trivia title={"Date Trivia"} text={datetrivia}/>
      <Trivia title={"Year Trivia"} text={yeartrivia}/>
    </div>
  );
}
