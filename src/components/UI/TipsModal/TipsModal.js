import Backdrop from "../Backdrop/Backdrop";

const TipsModal = (props) => {
  return (
    <Backdrop>
      <div className="tipsModal">
        <div className="tipsText">
          <p>{props.tips}</p>
        </div>
        <div className="confirmBtns">
          <button className="confirmBtn" onClick={props.onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default TipsModal;
