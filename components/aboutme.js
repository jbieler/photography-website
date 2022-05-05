
import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function AboutMe() {
    return (
      <>
      <Row>
      <Col className="pb-3 mx-auto justify-content-center col-12 col-sm-4 col-md-3 col-xl-2">
          <Image roundedCircle={true} fluid={true} src="jochen.jpg"></Image>
        </Col>
        <Col className="pb-3 mx-auto justify-content-center">
          <p>Ich bin Jochen, Vater von zwei Jungs und ich wohne im nördlichen Umland von Berlin. 
          Ursprünglich aus Heidelberg, bin ich 2010 nach Berlin gezogen. Hier habe ich meine Frau kennengelernt und meine Leidenschaft für die Fotografie entdeckt. 
          Ich habe mit urbaner Streetfotografie und Landschaftsfotografie angefangen, bin dafür viel gereist, bis sich mein fotografisches Interesse für Portraits verstärkte.
          </p><p>
          Seitdem fotografiere und begleite ich mit Vorliebe Emotionen und bedeutsame Ereignisse im Leben von Menschen, wie Hochzeiten oder Schwangerachaften und Babies.
          </p>
        </Col>
        </Row>
      </>
      );
    }

export default AboutMe;