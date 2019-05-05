import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Base = styled.div`
  margin-top: 60px;
`;

function Template({ children }) {
  return (
    <Base>
      <Navbar />
      { children }
    </Base>
  );
}

export default Template;