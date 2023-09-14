const WorkWithReason = (props) => {
  return (
    <div className="workWithReason">
      <i aria-hidden="true" className={props.content.iconClass}></i>
      <h2>{props.content.h2Content}</h2>
      <p>{props.content.pContent}</p>
    </div>
  );
};

export default WorkWithReason;
