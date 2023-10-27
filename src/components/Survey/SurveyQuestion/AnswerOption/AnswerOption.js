import { useEffect, useState } from "react";

const AnswerOption = (props) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleChange = (e) => {
    setIsCheck(!isCheck);
    props.getSelected(e.target.value, !isCheck);
  };

  useEffect(() => {
    if (props.selected.includes(props.content)) {
      setIsCheck(true);
    }
  }, [props.selected]);

  return (
    <div className="answerOption">
      <input
        type={props.type}
        value={props.content}
        id={props.content}
        name={props.name || ""}
        checked={isCheck}
        onChange={handleChange}
      />
      <label htmlFor={props.content}>{props.content}</label>
    </div>
  );
};

export default AnswerOption;
