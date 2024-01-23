import React, { useState } from "react";
import { validateEmail } from '../utils/helper';
import './Contact.css';


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

// const handleNameBlur = (e) => {
//   // You can perform actions when the "name" input field loses focus here
//   console.log('Name input field lost focus');
// }

    return (
        // <h1>Contact Page</h1>
        <div className="container">
        {/* <h1>{name}</h1>  */}

        <form className="form" onSubmit={handleFormSubmit}>
          <input className='input-name mb-3'
            value={name}
            name="name"
            onChange={handleInputChange}
            // onBlur={handleNameBlur}
            type="text"
            placeholder="name"
          />
            <input className='input-name mb-4'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
          <textarea className='input-name mb-5'
            value={message}
            name="message" 
            placeholder="message"
            onChange={handleInputChange}
            type="text"
            style={{ height: '30vh' }}
            />
          {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
          <button className="contact-btn" type="submit">
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