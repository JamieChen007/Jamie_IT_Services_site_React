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

  return (
    <section className="survey">
      <h2>{props.content.h2Content}</h2>
      <h4>{props.content.h4Content}</h4>
      <StepContainer stepNum={index} />
      <div className="surveyQuestions">
        <SurveryQuestion
          contactForm={isContactFormShow}
          key={props.content.surveyQuestions[index]}
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
