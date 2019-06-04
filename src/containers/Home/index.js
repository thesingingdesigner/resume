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
            <p><b>UX/UI Designer</b></p>
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
            “Looking for a very challenging position, as a UX/UI Designer, from end-to-end user journey and business to business endpoint, for fast, easy and effective productions, with a positive environment and supporting growth personally and professionally.”
            </p>
            <p className="text-align-left">
            Hello there, I'm a Graphic/UI/UX Designer & Prototype Developer from Cavite, Philippines. I love to challenge myself in an interesting, challenging and useful web and mobile applications because of the way it makes me think on how the user-experience and systems will work from end-to-end users.
            <br />
            <br />

            When I am not working as a graphic designer, I spend my time doing some other creative stuff such as writing songs, poems, stories and doing lots of productive thinking. I also like travelling and going to heritage places, do some fishing and nature tripping.
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