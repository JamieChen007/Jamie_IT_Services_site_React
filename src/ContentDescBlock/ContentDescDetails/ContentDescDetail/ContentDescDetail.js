import ContentDescDetailP from "./ContentDescDetailP/ContentDescDetailP";
import ContentDescDetailLi from "./ContentDescDetailLi/ContentDescDetailLi";

const ContentDescDetail = (props) => {
  return (
    <>
      {props.content.h4Content ? <h4>{props.content.h4Content}</h4> : ""}
      {props.content.pContentDescDetail
        ? props.content.pContentDescDetail.map((pContentDescDetail) => {
            return (
              <ContentDescDetailP
                key={pContentDescDetail}
                content={pContentDescDetail}
              />
            );
          })
        : ""}

      <ul>
        {props.content.ulContentDescDetail
          ? props.content.ulContentDescDetail.map((liContentDescDetail) => {
              return (
                <ContentDescDetailLi
                  key={liContentDescDetail}
                  content={liContentDescDetail}
                />
              );
            })
          : ""}
      </ul>
    </>
  );
};

export default ContentDescDetail;
