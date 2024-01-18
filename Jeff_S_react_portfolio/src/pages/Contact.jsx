import { useState } from "react";
import { validateEmail } from '../utils/helper';
function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'message') {
        setMessage(inputValue);
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !email) {
        setErrorMessage('Email or name is invalid');
        return;
    }

    setName('');
    setEmail('');
}

    return (
        // <h1>Contact Page</h1>
        <div className="container text-center">
        <h1>{name}</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
          <input
            value={message}
            name="message" 
            placeholder="message"
            onChange={handleInputChange}
            type="text"
            />
          {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
          <button type="submit">
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
}

export default Contact;