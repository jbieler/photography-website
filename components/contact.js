import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    document.getElementById('submitButton').innerHTML = "Sende Nachricht...";
    document.getElementById('submitButton').setAttribute("disabled", true);

    emailjs.sendForm('service_gbkv31e', 'template_xg1mj8s', form.current, 'user_dPJNJKPhpcL3pBcy5AMhD')
      .then((result) => {
          document.getElementById('submitButton').style="background-color: #C1DEB4; color: #000;";
          document.getElementById('submitButton').innerHTML = "Nachricht erfolgreich gesendet";
      }, (error) => {
          document.getElementById('submitButton').style="background-color: #FF6960; color: #000;";
          document.getElementById('submitButton').innerHTML = "Es ist ein Fehler aufgetreten - Bitte später erneut versuchen";
      });
  };

  return (
        <Form ref={form} onSubmit={sendEmail}>
          <div className="justify-content-center pb-3">
          Ich freue mich von dir zu hören. Schreib mir gerne deine Vorstellungen und Wünsche. Ich werde mich zeitnah bei dir mit einem individuellen Angebot melden.
          </div>

          <Form.Control size="lg" className="mb-3" type="text" placeholder="Dein Name" name="from_name" required />

          <Row>
            <Col xs={12} s={6} m={6} l={6} xl={6} xxl={6}>
              <Form.Control size="lg" className="mb-3" type="text" placeholder="Deine Telefonnummer" name="from_phone_number" />
            </Col>
            <Col xs={12} s={6} m={6} l={6} xl={6} xxl={6}>
              <Form.Control size="lg" className="mb-3" type="email" placeholder="Deine E-mail Adresse" name="from_email" required />
            </Col>
          </Row>
          <Form.Control size="lg" className="mb-3" as="textarea" rows="5" placeholder="Deine Nachricht" name="message" required />
          <Button size="lg" type="submit" id="submitButton" variant="outline-primary">Absenden</Button>

        </Form>


  );
};

export default Contact;
