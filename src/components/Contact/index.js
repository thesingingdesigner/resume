import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;