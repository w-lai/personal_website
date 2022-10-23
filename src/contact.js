import React, { useState } from "react";
import { send } from 'emailjs-com';
import "./style/contact.css";

const Contact = () => {
    const [formContents, setFormContents] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_0fv2noi',
            'template_c7djazh',
            formContents,
            'ArlXtNkosnhIBBRfJ',
        ).then((response) => {console.log('SUCCESS!', response.status, response.text);
        }).catch((error) => {
            console.log('FAILED', error);
        });
        setFormContents({from_name: '', message: '', reply_to: ''});
    }
    
    const onChange = (e) => {
        setFormContents({...formContents, [e.target.name]: e.target.value });
    }

    return (
    <div className="Contact">
        <h1>Contact Me</h1>
        <form onSubmit={(e) => onSubmit(e)} className="form">
            <label>Name</label>
            <input 
                type="text"
                name="from_name"
                placeholder="from name"
                value={formContents.from_name}
                onChange={onChange}
                />
            <label>Your Email</label>
            <input 
                type="text"
                name="reply_to"
                placeholder="reply_to"
                value={formContents.reply_to}
                onChange={onChange}
                />
            <label>Message</label>
            <textarea 
            type="text"
            name="message"
            placeholder="message"
            value={formContents.message}
            onChange={onChange}
            />
            
            <button type="submit">Submit</button>
        </form>
    </div>
    );
    
}

export default Contact;