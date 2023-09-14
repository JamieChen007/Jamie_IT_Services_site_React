import PicContainer from "../components/PicContainer";
import ContactForm from "../components/ContactForm";
import CompanyDetails from "../components/CompanyDetails";
import ContactSlogan from "../components/ContactSlogan";

const CONTACT_CONTENT = {
  picContainerContent: {
    picClass: "contactUsPic",
    h1Content: "Contact Us",
    h2Content: "Get in touch with Jamie IT Services.",
    pContent: "",
    btnContent: "",
    showContactMethod: false,
  },
  contactFormContent: {
    pContent: `If you have any questions about how 
    Jamie IT Services can assist your businesses IT
    needs then please use the contact form below. If you are looking for
    Remote IT support. We aim to respond to all enquiries
    within 24 hours.`,
  },
};

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
