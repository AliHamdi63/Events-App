import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'


const SingleEvent = ({ event }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');
    // console.log(router);

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventID = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please enter a correct email address.');
        }


        try {
            // POST fetch request
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailValue, eventID })
            });
            if (!response.ok) throw new Error(`Error: ${response.status}`)

            const data = await response.json();
            setMessage(data.message);

            inputEmail.current.value = '';

        } catch (error) {
            console.log("ERROR", error);
            // setMessage(error.response);
        }

    }

    return (
        <div className='event_single_page'>
            <h1>{event.title}</h1>
            <Image src={event.image} alt={event.title} width={600} height={300} />
            <p>{event.description}</p>
            <form onSubmit={onSubmit} className='email_registration'>
                <label>Get Registered for this event!</label>
                <input
                    ref={inputEmail}
                    // type='email'
                    id='email'
                    placeholder='Please insert your email here'
                />
                <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default SingleEvent