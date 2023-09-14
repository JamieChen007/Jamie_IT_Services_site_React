import { Link } from "react-router-dom";
import { useContext } from "react";
import BasicInfoContext from "../store/BasicInfoContext";

const PicContainer = (props) => {
  const ctx = useContext(BasicInfoContext);

  return (
    <figure
      className={`picContainer ${props.content.picClass}`}
      style={
        ctx.isMobileNavOpenResult
          ? { marginTop: "18rem" }
          : { marginTop: "8rem" }
      }
    >
      {props.content.h1Content && <h1>{props.content.h1Content}</h1>}
      {props.content.h2Content && <h2>{props.content.h2Content}</h2>}
      {props.content.pContent && <p>{props.content.pContent}</p>}
      {props.content.showContactMethod && (
        <>
          <Link to={`mailto:${ctx.Email}`} className="quoteBtn">
            {props.content.btnContent}
          </Link>
          <p>
            Or call us directly on <span>{ctx.phone}</span>
          </p>
        </>
      )}
    </figure>
  );
};

export default PicContainer;
