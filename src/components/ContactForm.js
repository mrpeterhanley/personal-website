import React, { useState } from "react";
import styled from 'styled-components';
import useForm from '../utils/useForm';

const ContactFormStyles = styled.form`
    
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;

    input,
    textarea {
        padding: 7.5px;
        margin: 10px;
        border: 0;
        border-radius: var(--border-radius);
    }

    .response {
        padding: 5px;
        margin: 5px;
        text-align: center;
    }

    button {
        background-color: var(--blue);
        color: var(--black);
        padding: 7px;
        margin: 10px 10px;
        border-radius: var(--border-radius);
        border: none;

        &:hover {
            background-color: goldenrod;
            cursor: pointer;
        }
    }
`;

export default function ContactForm() {

  const { values, updateValues, resetValues } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const formURL = "https://jxxv3mt36j.execute-api.ap-southeast-2.amazonaws.com/Prod/submitForm";

  async function submitOrder(e) {
    e.preventDefault();

    if (!values.name || !values.email || !values.message) {
        setResponseMessage('Please ensure all fields are filled in!');
        return;
    }

    setResponseMessage('Sending...');
    const body = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    fetch(formURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    })
    .then((res) => {
        if (res.status === 200) {
            setResponseMessage(`Message submitted, thank you ${values.name}`)
            resetValues();
        } else {
            setResponseMessage('Error! Please try again');
        }
    })
  }
    
  return (
    <ContactFormStyles onSubmit={submitOrder}>  
        <input type="text" name="name" placeholder="Name" value={values.name} onChange={updateValues} />
        <input type="email" name="email" placeholder="Email" value={values.email} onChange={updateValues} />
        <textarea
            rows="5"
            cols="50"
            name="message"
            placeholder="Message"
            value={values.message} 
            onChange={updateValues}
        ></textarea>
        {responseMessage && <div className="response">{responseMessage}</div>}
        <button type="submit">SEND</button>
    </ContactFormStyles>
  )
}