import ChooseReason from "./ChooseReason/ChooseReason";

const ChooseReasons = (props) => {
  return (
    <section className="chooseReasons">
      {props.content.chooseReasons.map((chooseReason) => {
        return (
          <ChooseReason key={chooseReason.h2Content} content={chooseReason} />
        );
      })}
    </section>
  );
};

export default ChooseReasons;
