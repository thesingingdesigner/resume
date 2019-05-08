import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const Contact = () => {
  return ( 
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form style={{ marginBottom: '40px' }} name="contact" method="POST" data-netlify="true">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input type="text" name="subject" id="subject" placeholder="Subject" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Text Area</Label>
              <Input type="textarea" name="message" id="message" placeholder="Message" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;