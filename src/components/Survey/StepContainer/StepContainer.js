const StepContainer = (props) => {
  return (
    <div className="stepContainer">
      <div
        className={props.stepNum >= 0 ? "stepCurrent" : "step"}
        name="step_number"
      >
        <span>1</span>
      </div>
      <div
        className={props.stepNum >= 1 ? "lineLink" : "line"}
        name="step_line"
      ></div>
      <div
        className={props.stepNum >= 1 ? "stepCurrent" : "step"}
        name="step_number"
      >
        <span>2</span>
      </div>
      <div
        className={props.stepNum >= 2 ? "lineLink" : "line"}
        name="step_line"
      ></div>
      <div
        className={props.stepNum >= 2 ? "stepCurrent" : "step"}
        name="step_number"
      >
        <span>3</span>
      </div>
      <div
        className={props.stepNum >= 3 ? "lineLink" : "line"}
        name="step_line"
      ></div>
      <div
        className={props.stepNum >= 3 ? "stepCurrent" : "step"}
        name="step_number"
      >
        <span>4</span>
      </div>
      <div
        className={props.stepNum >= 4 ? "lineLink" : "line"}
        name="step_line"
      ></div>
      <div
        className={props.stepNum >= 4 ? "stepCurrent" : "step"}
        name="step_number"
      >
        <span>5</span>
      </div>
      <div
        className={props.stepNum >= 5 ? "lineLink" : "line"}
        name="step_line"
      ></div>
      <div
        className={props.stepNum >= 5 ? "stepCurrent" : "step"}
        name="step_number"
      >
        <span>6</span>
      </div>
    </div>
  );
};

export default StepContainer;
