import { useEffect, useState } from "react";

const ContactForm = (props) => {
  const { contactFormInfo, simpleForm, getContactForm } = props;

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormInput((prev) => ({
      ...formInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your submit data is: " + JSON.stringify(formInput));
    //fetch api and submit data
  };

  useEffect(() => {
    if (simpleForm) {
      getContactForm(formInput);
    }
  }, [formInput, simpleForm, getContactForm]);

  useEffect(() => {
    if (simpleForm) {
      setFormInput(contactFormInfo);
    }
  }, [simpleForm]);

  return (
    <div className="contactForm">
      {props.simpleForm ? (
        ""
      ) : (
        <>
          <h2>Contact Us</h2>
          <p>{props.content.pContent}</p>
        </>
      )}
      <form action="#" className="contactFormInput" onSubmit={handleSubmit}>
        <fieldset className="nameRow borderNone">
          <div className="formFirstName">
            <label htmlFor="firstNameInput">first name</label>
            <input
              type="text"
              id="firstNameInput"
              required
              value={formInput.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="formLastName">
            <label htmlFor="lastNameInput">last name</label>
            <input
              type="text"
              id="lastNameInput"
              required
              value={formInput.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <fieldset className="contactInfoRow borderNone">
          <div className="formEmail">
            <label htmlFor="emailInput">email</label>
            <input
              type="email"
              id="emailInput"
              required
              value={formInput.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="formPhone">
            <label htmlFor="phoneInput">phone number</label>
            <input
              type="text"
              id="phoneInput"
              required
              pattern="^[0-9]*$"
              value={formInput.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <fieldset className="messageRow borderNone">
          <div className="formMessage">
            <label htmlFor="messageInput">message</label>
            <textarea
              id="messageInput"
              cols="30"
              required
              rows="10"
              value={formInput.message}
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
        </fieldset>
        {props.simpleForm ? (
          ""
        ) : (
          <>
            <div className="formSubmit">
              <input type="submit" value="send message" />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
