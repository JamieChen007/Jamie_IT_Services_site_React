import AnswerOption from "./AnswerOption/AnswerOption";
import ContactForm from "../../ContactForm";
import { useEffect, useState, useMemo } from "react";

const SurveryQuestion = (props) => {
  // store all selected options in array
  const [totalSelectedOptions, setTotalSelectedOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const {
    content,
    getQuestionWithOption,
    questionWithOptions,
    isContactFormShow,
  } = props;

  const answerOptions = useMemo(() => content?.answerOptions || [], [content]);

  const surveyQuestionDetail = content?.surveyQuestionDetail || currentQuestion;

  // callback function to get select or un-tick option and setState
  const getOption = (option, isCheck) => {
    // if radio button
    if (content.type === "radio") {
      //compare intersection of totalSelectedOptions and current question answerOptions
      const selectedInRadioOption = totalSelectedOptions.filter((element) =>
        answerOptions.includes(element)
      );
      // remove the option which selected in last operation
      const newArray = totalSelectedOptions.filter(
        (item) => item !== selectedInRadioOption[0]
      );
      // setState use array that is already remove selected option, plus new select option
      setTotalSelectedOptions([...newArray, option]);
      return;
    }

    // if checkbox
    // handle select option
    if (isCheck) {
      setTotalSelectedOptions([...totalSelectedOptions, option]);
      return;
    }
    // handle un-tick option
    if (!isCheck) {
      const index = totalSelectedOptions.indexOf(option);
      totalSelectedOptions.splice(index, 1);
      setTotalSelectedOptions(totalSelectedOptions);
      return;
    }
  };

  useEffect(() => {
    // if is for judge contact form
    if (!isContactFormShow) {
      setCurrentQuestion(surveyQuestionDetail);
      // compare totalSelectedOptions with current question answerOptions to find out selectedInCurrentQuestion
      const selectedInCurrentQuestion = totalSelectedOptions.filter((element) =>
        answerOptions.includes(element)
      );

      // execute function to pass question and options back
      getQuestionWithOption(surveyQuestionDetail, selectedInCurrentQuestion);
    }
  }, [
    totalSelectedOptions,
    answerOptions,
    surveyQuestionDetail,
    content,
    isContactFormShow,
  ]);

  return (
    <div className="surveyQuestion">
      {isContactFormShow ? (
        <ContactForm
          simpleForm={true}
          getContactForm={props.getContactForm}
          contactFormInfo={props.contactFormInfo}
        />
      ) : (
        <>
          <label className="surveyQuestionDetail">{surveyQuestionDetail}</label>
          {answerOptions.map((answerOption) => {
            return (
              <AnswerOption
                type={content.type}
                name={content.name}
                key={answerOption}
                content={answerOption}
                getOption={getOption}
                selectedOptions={questionWithOptions[currentQuestion]}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default SurveryQuestion;
