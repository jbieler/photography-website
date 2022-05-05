import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';


function TitledComponent(props) {

  return (
    <Container>
      <h2 id={props.anchorId} className="text-primary text-center mb-3">{props.title.toUpperCase()}</h2>
      {props.children}
    </Container>
  );
};

export default TitledComponent;