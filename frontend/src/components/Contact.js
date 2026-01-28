import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import astronaut from "../assets/img/astronaut-contact-img.webp";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState(null);

  const onFormUpdate = (field, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const sendEmail = async () => {
    try {
      const res = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send message");
      }

      return { success: true, message: data.message };
    } catch (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        message: "Unable to send message. Please try again later.",
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const result = await sendEmail();

    setButtonText("Send");
    setStatus(result);

    if (result.success) {
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {() => <img src={astronaut} alt="Contact Us" />}
            </TrackVisibility>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {() => (
                <div>
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formDetails.firstName}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formDetails.lastName}
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formDetails.email}
                          required
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          value={formDetails.phone}
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>

                      <Col className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={formDetails.message}
                          required
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        />
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status && (
                        <Col>
                          <p
                            className={
                              status.success ? "success" : "danger"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
