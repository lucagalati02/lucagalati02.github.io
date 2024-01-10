import React, { useState } from 'react';
import { Image, Card, Input, Textarea, Button } from '@nextui-org/react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4djmoug', 'template_numpnaf', e.target, 'KlzqbLnRiSm_yPaSy');

    // Clear the form after submission
    setFormData({
      email: '',
      name: '',
      message: '',
    });
    notify();
  };
  const notify = () => toast.success('Email Sent!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 255, 0, 0.0)',
        border: '0px dashed green',
        height: '90%',
        width: '100%',
        margin: '1rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
      className="flex-col lg:flex-row"
    >
      <Image isBlurred src="email.svg" style={{ marginRight: '1rem', minWidth: '300px', maxWidth: '300px' }} />
      <Card style={{ maxWidth: '50vw', minWidth: '425px' }}>
        <div style={{ margin: '1rem' }}>
          <form className="contact_form" onSubmit={sendEmail}>
            <div style={{ marginBottom: '0.5rem' }}>
              <Input
                type="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <Input
                type="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea
                type="text"
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></Textarea>
            </div>
            <Button
              type="submit"
              style={{ borderRadius: '25px', background: 'linear-gradient(to right, grey, #8cbeb6e7)', width: '100%' }}
            >
              Send
            </Button>
          </form>
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
