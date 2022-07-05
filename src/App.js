import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";


import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const[check,setCheck]=useState(false)

  const fetchQuestions = async (category = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=5${
        category && `&category=${category}`
      }`
    );

    setQuestions(data.results)
  };

  return (
    <BrowserRouter>
      <div className="app" >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              check={check} setCheck={setCheck}

            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score}  check={check} setCheck={setCheck}/>
          </Route>
        </Switch>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
