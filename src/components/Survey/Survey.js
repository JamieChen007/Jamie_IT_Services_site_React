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

  // store all question + final selected options
  const [questionWithOptions, setQuestionWithOptions] = useState({});

  // call back function to get selected options and setState
  const getQuestionWithOption = (question, options) => {
    setQuestionWithOptions((prev) => ({
      ...questionWithOptions,
      [question]: options,
    }));
  };

  // store contactFormInfo
  const [contactFormInfo, setContactFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // call back function to get selected options and setState
  const getContactForm = (value) => {
    setContactFormInfo(value);
  };

  // validate form data, return all empty fields as an array
  const validateForm = () => {
    return Object.keys(contactFormInfo).filter(
      (key) =>
        contactFormInfo[key] === undefined ||
        contactFormInfo[key] === null ||
        contactFormInfo[key] === ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validateForm();
    if (validateResult.length > 0) {
      alert(`${validateResult} is required`);
      return;
    }

    alert(
      "Your submit data is: " +
        JSON.stringify(questionWithOptions) +
        JSON.stringify(contactFormInfo)
    );
    //fetch api and submit data
  };

  return (
    <section className="survey">
      <h2>{props.content.h2Content}</h2>
      <h4>{props.content.h4Content}</h4>
      <StepContainer stepNum={index} />
      <div className="surveyQuestions">
        <SurveryQuestion
          isContactFormShow={isContactFormShow}
          content={props.content.surveyQuestions[index]}
          getQuestionWithOption={getQuestionWithOption}
          questionWithOptions={questionWithOptions}
          getContactForm={getContactForm}
          contactFormInfo={contactFormInfo}
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
          onClick={isContactFormShow ? handleSubmit : nextClickHandler}
        >
          {isContactFormShow ? "Submit" : "Next"}
        </button>
      </div>
    </section>
  );
};

export default Survey;
