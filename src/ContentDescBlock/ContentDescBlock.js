import ContentDescDetails from "./ContentDescDetails/ContentDescDetails";

const ContentDescBlock = (props) => {
  return (
    <section className="contentDescBlock">
      {props.content.h2Content ? <h2>{props.content.h2Content}</h2> : ""}
      {props.content.h3Content ? <h3>{props.content.h3Content}</h3> : ""}
      <div className="contentDescDetail">
        {props.content.contentDescDetails1 ? (
          <ContentDescDetails content={props.content.contentDescDetails1} />
        ) : (
          ""
        )}
        {props.content.contentDescDetails2 ? (
          <ContentDescDetails content={props.content.contentDescDetails2} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ContentDescBlock;
