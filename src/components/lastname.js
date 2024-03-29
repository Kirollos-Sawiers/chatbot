import React, {useState} from "react";
import "./knopf.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Lastname = (props) => {
  const [inputVal, setInputVal] = useState("")
  const lastname = [
    {
      // text: "What's your surname/family name?",
      handler: props.actionProvider.moreInformationYes,
      id: 1,
    },
  ];

  const choiceHandler = (event) => {
    // console.log(event.target.value);
    if(inputVal && props.updateCaseComponent){
    window.sessionStorage.setItem("lname", inputVal)
    props.actionProvider.formEmail()
    } else if(inputVal && props.callBackComponent){
      window.sessionStorage.setItem("lname", inputVal)
      props.actionProvider.formEmailCall()
    } else {
      props.actionProvider.formLastName()
    }
  };

  const lastNameVal = (event) => {
    setInputVal(event.target.value)
  }
  const getInputID = (event)=> {
    let input = document.getElementById("myInput");
    event.preventDefault();
        choiceHandler()
  
  }
  

  const buttonsMarkup = lastname.map((choice) => (
    // <Button
    //   key={choice.id}
    //   // value={choice.text}
    //   // onClick={choice.handler}
    //   // className="knopf-button"
    // >
    //   {choice.text}
    // </Button>
console.log(props),
    <form key={choice.id}  onSubmit={(e) => getInputID(e)}>
      {/* <label className="knopf-container"> */}
        {choice.text}
        <input type="text" name="lname"  onChange={lastNameVal} className="knopf-button" />
      {/* </label> */}
      {/* <input type="submit" value="Submit" onClick={choiceHandler} /> */}
      <FontAwesomeIcon icon={faPaperPlane} onClick={choiceHandler} />
    </form>
  ));

  return (
    <>
      <div className="knopf-container">{buttonsMarkup}</div>
    </>
  );
};

export default Lastname;
