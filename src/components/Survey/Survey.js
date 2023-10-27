import { useState } from "react";
import SurveryQuestion from "./SurveyQuestion/SurveryQuestion";
import StepContainer from "./StepContainer/StepContainer";

const Survey = (props) => {
  const [index, setIndex] = useState(0);
  const [isContactFormShow, setIsContactFormShow] = useState(false);

  const prevClickHandler = () => {
    if (index <= 0) {
      return;
    }
    setIndex((prevState) => prevState - 1);
    if (index <= props.content.surveyQuestions.length) {
      setIsContactFormShow(false);
      return;
    }
  };
  const nextClickHandler = () => {
    if (index >= props.content.surveyQuestions.length) {
      return;
    }
    setIndex((prevState) => prevState + 1);
    if (index >= props.content.surveyQuestions.length - 1) {
      setIsContactFormShow(true);
      return;
    }
  };

  const [selected, setSelected] = useState([]);

  const getSelected = (value, isCheck) => {
    if (isCheck) {
      setSelected([...selected, value]);
      return;
    }
    if (!isCheck) {
      const index = selected.indexOf(value);
      selected.splice(index, 1);
      setSelected(selected);
      return;
    }
  };

  return (
    <section className="survey">
      <h2>{props.content.h2Content}</h2>
      <h4>{props.content.h4Content}</h4>
      <StepContainer stepNum={index} />
      <div className="surveyQuestions">
        <SurveryQuestion
          contactForm={isContactFormShow}
          selected={selected}
          getSelected={getSelected}
          content={props.content.surveyQuestions[index]}
        />
      </div>
      <div className="button_container">
        <button
          className={index > 0 ? "step_button_active" : "step_button"}
          id="prev"
          onClick={prevClickHandler}
        >
          Prev
        </button>
        <button
          className="step_button_active"
          id="next"
          onClick={nextClickHandler}
        >
          {isContactFormShow ? "Submit" : "Next"}
        </button>
      </div>
    </section>
  );
};

export default Survey;
