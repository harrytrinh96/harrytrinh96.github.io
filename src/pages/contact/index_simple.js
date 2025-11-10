import "./style.css";
import { Container } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import React from "react";

export const ContactSection = () => {
  return (
    <Container id="contact" className="About-header">
      <div className="sec_sp">
        <h3 className="color_sec py-4">Get in Touch</h3>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
            {contactConfig.YOUR_EMAIL}
          </a>
        </p>
        <p>
          <strong>Location:</strong> Oslo, Norway
        </p>
        <p>{contactConfig.description}</p>
      </div>
    </Container>
  );
};

