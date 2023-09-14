const ChooseReason = (props) => {
  return (
    <div className="chooseReason">
      <i aria-hidden="true" className={props.content.iconClass}></i>
      <h2>{props.content.h2Content}</h2>
      <p>{props.content.pContent}</p>
    </div>
  );
};

export default ChooseReason;
