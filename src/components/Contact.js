import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import astronaut from "../assets/img/astronaut-contact-img.webp";
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com'; // Import emailjs-com

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const sendEmail = async () => {
    try {
      const response = await emailjs.sendForm(
        '\x73\x65\x72\x76\x69\x63\x65\x5f\x69\x32\x6f\x75\x39\x6f\x75',
        '\x74\x65\x6d\x70\x6c\x61\x74\x65\x5f\x6b\x76\x36\x76\x6e\x31\x77',
        '#contact-form',
        '\x34\x6a\x44\x51\x5f\x43\x49\x55\x78\x58\x76\x45\x7a\x4b\x77\x49\x42',
      );
      console.log('Email sent:', response);
      return { success: true, message: 'Message sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Error: Unable to send the message. Please try again later.' };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    const result = await sendEmail();
    setButtonText("Send");
    if (result.success) {
      setFormDetails(formInitialDetails);
    }
    setStatus({ success: result.success, message: result.message });
  };
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img src={astronaut} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {() =>
                <div>
                <h2>Get In Touch</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" name="firstName" required onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" name="lastName" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" name="email" required onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." name="phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" name="message" required onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
