const AnswerOption = (props) => {
  return (
    <div className="answerOption">
      <input
        type={props.type}
        value={props.content}
        id={props.content}
        name={props.name || ""}
      />
      <label htmlFor={props.content}>{props.content}</label>
    </div>
  );
};

export default AnswerOption;
