import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Result from "../../Pages/Result/Result";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
  check
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);


  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    console.log("info", i)
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues >= 4) {
      history.push("/result");
    }
    setCurrQues(currQues + 1);
    setSelected();

  };

  const handlePrev = () => {
    setCurrQues(currQues - 1);
  }

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <div className="questions-five">
        <Button variant="contained" onClick={() => setCurrQues(0)}>Question1</Button>
        <Button variant="contained" onClick={() => setCurrQues(1)}>Question2</Button>
        <Button variant="contained" onClick={() => setCurrQues(2)}>Question3</Button>
        <Button variant="contained" onClick={() => setCurrQues(3)}>Question4</Button>
        <Button variant="contained" onClick={() => setCurrQues(4)}>Question5</Button>
      </div>


      {check ? <div className="singleQuestion">
        <button onClick={() => setCurrQues(0)}>b1</button>
        <h1> check Answers {currQues + 1} :</h1>
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={true}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">

          <Button
            color="secondary"
            onClick={handlePrev}>Previous</Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues >= 4 ? "close" : "Next Question"}

          </Button>


        </div>
      </div> :


        <div className="singleQuestion">

          <h1>Question {currQues + 1} :</h1>
          {console.log("ques", questions, "curr", currQues)}
          <h2>{questions[currQues].question}</h2>
          <div className="options">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i) => (
                <Button

                  // className={`singleOption  ${selected && handleSelect(i)}`}
                  key={i}
                  onClick={() => handleCheck(i)}
                // disabled={selected}
                >
                  {i}
                </Button>
              ))}
          </div>
          <div className="controls">

            <Button

              variant="contained"
              color="primary"
              size="large"
              disabled={currQues === 0}
              onClick={handlePrev}>Previous</Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: 185 }}
              onClick={handleNext}
            >
              {currQues >= 4 ? "Submit" : "Next Question"}

            </Button>


          </div>
        </div>}
    </div>
  );
};

export default Question;
