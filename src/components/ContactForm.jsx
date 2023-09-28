import { useState } from 'react';

export default function ContactForm() {
  const [submitIsValid, setSubmitIsValid] = useState(false);
  const [warnContent, setWarnContent] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('name=',name);
    console.log('value=',value);
    if (name === 'contact-name') {
      console.log('setting contact');
      setContactName(value);
    } else if (name === 'email') {
      console.log('setting email');
      setEmail(value);
    } else if (name === 'message') {
      console.log('setting message');
      setMessage(value);
    }
    setSubmitIsValid(false);
    if (!contactName) {
      console.log('name blank');
      setWarnContent("Name must not be blank");
    } else if (!email) {
      console.log('email blank');
      setWarnContent("Email must not be blank");
    } else if (!message) {
      setWarnContent("Message must not be blank");
    } else if (!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      setWarnContent("Invalid email");
    } else {
      setWarnContent("");
      setSubmitIsValid(true);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    alert('Sorry! Contact storage is not working at this time.');
  };

  return (
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <p>Name:</p>
        <p><input
          value={contactName}
          name="contact-name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        /></p>
        <p>email:</p>
        <p><input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        /></p>
        <p>Message:</p>
        <p><textarea 
          value={message}
          name="message"
          onChange={handleInputChange}
          rows={10}
          cols={40}
        />
        </p>
        <p>{warnContent}</p> 
        <p>
        <button type="submit" disabled={!submitIsValid}>
          Submit
        </button></p>
      </form>
  );
}
