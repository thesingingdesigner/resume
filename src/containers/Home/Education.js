import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import styled from 'styled-components';

const CustonContainer = styled(Container)`
  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const BoldText = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

const BoldTextSmall = styled(BoldText)`
  font-size: 13px;
  margin-bottom: 10px;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 450px;
  }
`;

export default function Contact () {
  return (
    <CustonContainer id="education">
      <Title>Education</Title>
      <Row>
        <Col sm="6">
          <CenteredContent>
            <div>
              <div className="mb30">
                <BoldText>Informatics Computer Institute - Imus</BoldText>
                <BoldTextSmall>December 2010 - March 2011</BoldTextSmall>
                <span className="tag">Visual Graphics Design (NC II)</span>
              </div>
              <div className="mb30">
                <BoldText>ABE International College of Business</BoldText>
                <BoldTextSmall>June 2003 - March 2004</BoldTextSmall>
                <span className="tag">BSBA Major E-Business</span>
              </div>
              <div className="mb30">
                <BoldText>STI - System Technology Institute</BoldText>
                <BoldTextSmall>October 2000 - October 2002</BoldTextSmall>
                <span className="tag">Diploma in Computer Electronics Technology</span>
              </div>
            </div>
          </CenteredContent>
        </Col>
        <Col sm="6" className="d-none d-sm-block">
          <CenteredContent>
            <div>
              <i
                className="fa fa-graduation-cap"
                style={{
                  fontSize: '220px',
                  color: '#f6f6f6'
                }}
              />
            </div>
          </CenteredContent>
        </Col>
      </Row>
    </CustonContainer>
  );
}