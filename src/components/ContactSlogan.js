import { useContext } from "react";
import { Link } from "react-router-dom";
import BasicInfoContext from "../store/BasicInfoContext";

const ContactSlogan = () => {
  const ctx = useContext(BasicInfoContext);

  return (
    <section
      className="contactSlogan"
      style={{
        backgroundImage:
          "url(https://jamieitservices.s3.ap-southeast-2.amazonaws.com/sectionbg_6.jpg)",
      }}
    >
      <h3>
        Own less, do more. <span>Zero infrastructure, zero worries.</span>
      </h3>
      <div className="phoneBtn">
        <Link to={`tel:${ctx.phone}`}>{ctx.phone}</Link>
      </div>
    </section>
  );
};

export default ContactSlogan;
