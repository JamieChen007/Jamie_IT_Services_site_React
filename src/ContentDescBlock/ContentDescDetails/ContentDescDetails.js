import { Link } from "react-router-dom";
import ContentDescDetail from "./ContentDescDetail/ContentDescDetail";

const ContentDescDetails = (props) => {
  return (
    <>
      <div>
        {props.content.contentDescDetails.map((contentDescDetail) => {
          return (
            <ContentDescDetail
              key={contentDescDetail.h4Content}
              content={contentDescDetail}
            />
          );
        })}

        {props.content.isContactBtnShow ? (
          <div className="contactUsBtn">
            <Link to="/contact">contact us</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ContentDescDetails;
