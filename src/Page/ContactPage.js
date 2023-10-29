import PicContainer from "../components/PicContainer";
import ContactForm from "../components/ContactForm";
import CompanyDetails from "../components/CompanyDetails";
import ContactSlogan from "../components/ContactSlogan";
import { CONTACT_CONTENT } from "../constants/contactPage.Const";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    document.title =
      "Jamie IT Services - Contact Us | Reliable IT Company - Free Quote";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        "Contact Us today to find out how Jamie IT can assist your business IT requirements. We aim to respond to all enquiries within 24 hours."
      );
  }, []);

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
