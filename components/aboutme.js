
import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

function AboutMe() {
    return (
      <>
      <Container>
      <Row>
        <Col className="pb-3 mx-auto justify-content-center" xs={8} s={8} m={3} l={3} xl={3} xxl={3}>
          <Image roundedCircle={true} fluid={true} src="jochen.jpg"></Image>
        </Col>
        <Col>
          <Container className="justify-content-center">
          <p>Ich bin Jochen, Vater von zwei Jungs und ich wohne im nördlichen Umland von Berlin. 
          Ursprünglich aus Heidelberg, bin ich 2010 nach Berlin gezogen. Hier habe ich meine Frau kennengelernt und meine Leidenschaft zur Fotografie entdeckt. 
          Ich habe mit urbaner Streetfotografie und Landschaftsfotografie angefangen, bin dafür viel gereist, bis sich mein fotografisches Interesse für Portraits verstärkte.
          </p><p>
          Seitdem fotografiere und begleite ich mit Vorliebe Emotionen und bedeutsame Ereignisse im Leben von Menschen, wie Hochzeiten oder Familienzuwachs.
          </p><p>
          Ich freue mich von euch zu hören und vielleicht auch euch dabei begleiten zu dürfen.
          </p>
          </Container>
        </Col>
        </Row>
        </Container>
      </>
      );
    }

export default AboutMe;