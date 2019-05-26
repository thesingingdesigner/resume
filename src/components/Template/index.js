import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Base = styled.div`
  margin-top: 90px;
`;

const Footer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;

function Template({ children }) {
  return (
    <Base>
      <Navbar />
      { children }
      <Footer>
        Copyright © 2019 - thesigningdesigner.com
      </Footer>
    </Base>
  );
}

export default Template;