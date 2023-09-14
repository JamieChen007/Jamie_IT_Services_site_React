const ContactForm = (props) => {
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
      <form action="#" className="contactFormInput">
        <fieldset className="nameRow borderNone">
          <div className="formFirstName">
            <label htmlFor="firstNameInput">first name</label>
            <input type="text" id="firstNameInput" required />
          </div>
          <div className="formLastName">
            <label htmlFor="lastNameInput">last name</label>
            <input type="text" id="lastNameInput" required />
          </div>
        </fieldset>
        <fieldset className="contactInfoRow borderNone">
          <div className="formEmail">
            <label htmlFor="emailInput">email</label>
            <input type="email" id="emailInput" required />
          </div>
          <div className="formPhone">
            <label htmlFor="phoneInput">phone number</label>
            <input type="text" id="phoneInput" required pattern="^[0-9]*$" />
          </div>
        </fieldset>
        <fieldset className="messageRow borderNone">
          <div className="formMessage">
            <label htmlFor="messageInput">message</label>
            <textarea
              name=""
              id="messageInput"
              cols="30"
              required
              rows="10"
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
