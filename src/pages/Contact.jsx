import { useState } from "react";
import { validateEmail } from '../utils/helper';
import './Contact.css';


function Contact() {
  // State variables to manage user inputs and error messages
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
// Handle input changes and update corresponding state variables
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
// Handle form submission
const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate email and input fields
    if (!validateEmail(email) || !name || !email) {
        setErrorMessage('Email or name is invalid');
        return;
    }
    // Clear input fields on successful submission for project assignment only
    setName('');
    setEmail('');
}
// Handle input blur events for validation and error messages
const handleNameBlur = (e) => {
  const user = e.target.name
  if (user === 'email'){
    const validEmail = validateEmail(e.target.value)
    if(validEmail){
      setErrorMessage("")
    } else{
      setErrorMessage("Invalid Email entered")
    }
  }else if(user === "name"){
    const nameLength = e.target.value.length
    console.log('Name input field lost focus');
    if(nameLength < 1){
      setErrorMessage("Please enter valid name")
      console.log(errorMessage)
    }
  }
}

    return (
        <div className="container">

        <form className="form" onSubmit={handleFormSubmit}>
          {/* Input fields for name, email, and message */}
          <input className='input-name mb-3'
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleNameBlur}
            type="text"
            placeholder="name"
          />
            <input className='input-name mb-4'
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleNameBlur}
            type="email"
            placeholder="email"
          />
          <textarea className='input-name mb-5'
            value={message}
            name="message" 
            placeholder="message"
            onChange={handleInputChange}
            onBlur={handleNameBlur}
            type="text"
            style={{ height: '30vh' }}
            />
          {/* Submit button */}
          <button className="contact-btn" type="submit">
            Submit
          </button>
        </form>
        
       {/* Display error message if there is one */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
          
        )}
        
    

      </div>
    );
}

export default Contact;