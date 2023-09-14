import WorkWithReason from "./WorkWithReason/WorkWithReason";

const WorkWithReasons = (props) => {
  return (
    <section className="workWithReasons">
      <h2 className="subTitle">{props.content.h2Content}</h2>
      <h4 className="workWithReasonsQuestion">{props.content.h4Content}</h4>
      <div className="workWithReasonCtn">
        {props.content.workWithReasons.map((workWithReason) => {
          return (
            <WorkWithReason
              key={workWithReason.h2Content}
              content={workWithReason}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkWithReasons;
