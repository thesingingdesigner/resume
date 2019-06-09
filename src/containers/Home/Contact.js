import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { default as ContactForm } from '../../components/Contact';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const CustonContainer = styled(Container)`
  @media (min-width: 768px) {
    height: 100%;
  }
  padding-top: 20px;
  padding-bottom: 40px;
`;

export default function Contact () {
  return (
    <div
      id="contact"
      style={{
        backgroundColor: '#f6f6f6',
      }}
    >
      <CustonContainer>
        <Title>Contact</Title>
        <ContactForm />
      </CustonContainer>
    </div>
  );
}