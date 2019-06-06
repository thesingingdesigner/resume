import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


const Contact = () => {
  return (
    <Container>
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <div className="buttons mb30">
            <button className="primary ghost">
              Email
            </button>{' '}
            <button className="primary ghost">
              Github
            </button>{' '}
            <button className="primary ghost">
              Linkedin
            </button>{' '}
            <button className="primary ghost">
              Download CV
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form
            style={{ marginBottom: '40px' }}
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input type="text" name="subject" id="subject" placeholder="Subject" />
            </FormGroup>
            <FormGroup>
              <div data-netlify-recaptcha="true"></div>
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

