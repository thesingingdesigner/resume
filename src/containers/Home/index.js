import React from 'react';
import styled from 'styled-components';
import Template from '../../components/Template';
import WorkExperience from './WorkExperience';
import './styles.css';

const Base = styled.div`
  background-color: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;
  margin: 0;
`;

function Home() {
  return (
    <Template>
      <Base>
        <div id="home" className="card-container">
          <img className="round" src="https://randomuser.me/api/portraits/men/79.jpg" alt="user" />
          <h3>John Paul Rolle</h3>
          <h6>+63 947 571 8743</h6>
          <p>UX/UI Designer</p>
          <div className="buttons">
            <button className="primary ghost">
              Email
            </button>{' '}
            <button className="primary ghost">
              Github
            </button>{' '}
            <button className="primary ghost">
              Linkedin
            </button>
          </div>
          <div className="skills">
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </Base>
      <WorkExperience />
    </Template>
  );
}

export default Home;