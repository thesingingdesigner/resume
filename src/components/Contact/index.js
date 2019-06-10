import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


const Contact = () => {
  return (
    <Container>
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3}}>
          <div className="contact-form-button buttons mb30 text-center" target="_blank">
            <a href="mailto:johnpaulrolle@gmail.com">
              <button className="primary ghost">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>{' '}
                Email
              </button>
            </a>{' '}
            <a href="https://github.com/thesingingdesigner" target="_blank">
              <button className="primary ghost">
              <i class="fa fa-github" aria-hidden="true"></i>{' '}
                Github
              </button>
            </a>{' '}
            <a href="https://ph.linkedin.com/in/john-paul-r-364011105" target="_blank">
              <button className="primary ghost">
              <i class="fa fa-linkedin" aria-hidden="true"></i>{' '}
                Linkedin
              </button>
            </a>{' '}
            <a href="/jprolle-cv.pdf" target="_blank">
              <button className="primary ghost">
              <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>{' '}
                Download CV
              </button>
            </a>
          </div>
          <div className="text-center">
            <h5 className="mb20">
              <small>Primary Email</small><br />
              johnpaulrolle@gmail.com <br />
              jp_rolle@yahoo.com.ph
            </h5>
          </div>
          <div className="text-center">
            <h5 className="mb20">
              <small>Domain Email</small><br />
              request@thesingingdesigner.com
            </h5>
          </div>
          <div className="text-center">
            <h5 className="mb20">
              <small>Address</small><br />
              Dasmarinas City, Cavite
            </h5>
          </div>
          <div className="text-center">
            <h5 className="mb20">
              <small>Mobile</small><br />
              <span style={{ fontSize: "1.07rem" }}>+63 947 571 8743 (SMART)</span>
            </h5>
          </div>
          <div className="text-center">
            <h5 className="mb20">
              <small>Mobile</small><br />
              <span style={{ fontSize: "1.07rem" }}>+63 917 180 7690 (GLOBE)</span>
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

