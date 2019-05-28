import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Template from '../../components/Template';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Contact from './Contact';
import './styles.scss';
import avatar from '../../assets/images/thesingingdesigner-icon.svg'

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`;

const BaseHome = styled.div`

`;

const Avatar = styled.div`
  width: 120px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

function Home() {
  return (
    <Template>
      <Container>
        <Base>
          <BaseHome id="home" className="card-container">
            <Avatar>
              <img className="round mb20" alt="avatar" src={avatar} />
            </Avatar>
            <h3>John Paul "JP" Rolle</h3>
            <h6>+63 947 571 8743</h6>
            <p>UX/UI Designer</p>
            <div className="buttons mb30">
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
            <p className="qoute">
              "Looking for a very challenging  position as a UX/UI Desinger, from end-to-end user journey and business to business endpoint, for fast easy and effective productions, with positive environment and form for growth personally and professionally."
            </p>
            <p className="text-align-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </BaseHome>
        </Base>
      </Container>
      <WorkExperience />
      <Education />
    </Template>
  );
}

export default Home;