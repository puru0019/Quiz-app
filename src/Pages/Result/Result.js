import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";

const Result = ({ name, score ,setCheck}) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
const handleResult =()=>{
  history.push("quiz");
  setCheck(true)
  

}
const scoreCheck =(score)=>{
  return(
    <div>
      { score ? "Pass" : "fail"}
    </div>
  
  )
  

}
  return (
    <div className="result">
      <span className="title">Final Score :{ scoreCheck(score)} </span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      <Button onClick={handleResult} >Check</Button>
    </div>
  );
};

export default Result;
