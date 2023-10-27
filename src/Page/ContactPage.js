import PicContainer from "../components/PicContainer";
import ContactForm from "../components/ContactForm";
import CompanyDetails from "../components/CompanyDetails";
import ContactSlogan from "../components/ContactSlogan";
import { CONTACT_CONTENT } from "../constants/contactPage.Const";

const ContactPage = () => {
  return (
    <main className="mainContent">
      <PicContainer content={CONTACT_CONTENT.picContainerContent} />
      <section className="contactUsInfo">
        <ContactForm content={CONTACT_CONTENT.contactFormContent} />
        <CompanyDetails />
      </section>
      <ContactSlogan />
    </main>
  );
};

export default ContactPage;
