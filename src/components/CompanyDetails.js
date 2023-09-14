import { Link } from "react-router-dom";
import { useContext } from "react";
import BasicInfoContext from "../store/BasicInfoContext";

const CompanyDetails = () => {
  const ctx = useContext(BasicInfoContext);

  return (
    <div className="companyDetails">
      <h2>Company Details</h2>
      <p>
        <strong>
          Head office:
          <br />
        </strong>
        {ctx.officeAddress}
      </p>
      <p>
        <strong>Phone:</strong> <br />
        <strong>
          <Link to={`tel:${ctx.phone}`}>{ctx.phone}</Link>
        </strong>
      </p>
      <p>
        <strong>
          Email:
          <br />
          <Link to={`mailto:${ctx.Email}`}>{ctx.Email}</Link>
          <br />
        </strong>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20449.613480374053!2d151.24496790557131!3d-33.81274357911753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ab8fe3b410a7%3A0x93e2a64dc226718b!2sDobroyd%20Head!5e0!3m2!1szh-CN!2sau!4v1692279913331!5m2!1szh-CN!2sau"
        style={{
          border: 0,
          allowfullscreen: "",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
      ></iframe>
    </div>
  );
};

export default CompanyDetails;
