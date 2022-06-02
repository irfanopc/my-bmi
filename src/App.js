import BmiScore from "./components/BmiScore";
import BmiList from "./components/BmiList";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [bmi, setbmi] = useState("00");
  const [bmiType, setbmiType] = useState("not calculated");
  const onFormSubmit = (w, h) => {
    let b = calBmi(w, h);
    setbmi(b);
    let bType=weightType(b);
    setbmiType(bType);
    console.log(w, h);
  };
  const calBmi = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form onFormSubmit={onFormSubmit} />
        </div>
        <BmiScore bmino={bmi} bmiName={bmiType} />
        <BmiList />
      </div>
    </>
  );
}

export default App;
