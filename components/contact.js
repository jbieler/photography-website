import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
          <Form.Control size="lg" className="mb-3" type="text" placeholder="Dein Name" name="from_name" />
          <div class="row g-3">
            <div class="col">
              <Form.Control size="lg" className="mb-3" type="text" placeholder="Deine Telefonnummer" name="from_phone_number" />
            </div>
            <div class="col">
            <Form.Control size="lg" className="mb-3" type="email" placeholder="Deine E-mail Adresse" name="from_email" />
            </div>
          </div>
          <Form.Control size="lg" className="mb-3" as="textarea" rows="5" placeholder="Deine Nachricht" />
          <Button size="lg" type="submit" id="submitButton" variant="outline-primary">Absenden</Button>
        </Form>
  );
};

export default Contact;