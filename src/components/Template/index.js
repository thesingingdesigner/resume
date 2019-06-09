import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import DynamicScrollToTop from '../DynamicScrollToTop';
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
    <React.Fragment>
      <DynamicScrollToTop />
      <Base>
        <Navbar />
        { children }
        <Footer>
          Copyright © 2019 - thesingingdesigner.com
        </Footer>
      </Base>
    </React.Fragment>
  );
}

export default Template;