import AnswerOption from "./AnswerOption/AnswerOption";
import ContactForm from "../../ContactForm";

const SurveryQuestion = (props) => {
  return (
    <div className="surveyQuestion">
      {props.contactForm ? (
        <ContactForm simpleForm={true} />
      ) : (
        <>
          <label className="surveyQuestionDetail">
            {props.content.surveyQuestionDetail}
          </label>
          {props.content.answerOptions.map((answerOption) => {
            return (
              <AnswerOption
                type={props.content.type}
                name={props.content.name}
                key={answerOption}
                content={answerOption}
                selected={props.selected}
                getSelected={props.getSelected}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default SurveryQuestion;
