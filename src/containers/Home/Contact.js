import React from 'react';
import styled from 'styled-components';
import { default as ContactForm } from '../../components/Contact';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default function Contact () {
  return (
    <div id="contact">
      <Title>Contact</Title>
      <ContactForm />
    </div>
  );
}