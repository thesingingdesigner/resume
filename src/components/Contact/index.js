import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


const Contact = () => {
  return (
    <Container>
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3}}>
          <div className="buttons mb30">
            <button className="primary ghost" href="mailto:johnpaulrolle@gmail.com">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>{' '}
              Email
            </button>{' '}
            <button className="primary ghost" href="https://github.com/thesingingdesigner" target="_blank">
            <i class="fa fa-github" aria-hidden="true"></i>{' '}
              Github          
            </button>{' '}
            <button className="primary ghost" href="https://ph.linkedin.com/in/john-paul-r-364011105" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>{' '}
              Linkedin
            </button>{' '}
            <button className="primary ghost">
            <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>{' '}
              Download
            </button>
          </div>
          <Label for="email"><h5>Email: johnpaulrolle@gmail.com</h5></Label>
          <br />
          <Label for="mobile"><h5>Mobile: +63 947 571 8743 (SMART)</h5></Label>
          <br />
          <Label for="mobile"><h5>Mobile: +63 917 180 7690 (GLOBE)</h5></Label>
          <br />
          <Label for="address"><h5>Address: Dasmarinas City, Cavite</h5></Label>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

