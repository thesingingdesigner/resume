import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, } from 'reactstrap';
import Template from '../../components/Template';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Contact from './Contact';
import './styles.scss';
import avatar from '../../assets/images/jp.png'
import ImageProcess from '../../assets/images/esd.png';
import {
  Page,
  BannerImage,
  Lead,
  H1,
  H2,
  H3,
  UnorderedList,
  ImageTitle,
  CircledIcon,
  IconText,
  IconTextInline,
  CustomIconText,
  IconBox,
} from '../../components/CaseStudy';



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
  width: 180px;
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
            “Looking for a very challenging position, as a UX/UI Designer, from end-to-end user journey and business to business endpoint, for fast, easy and effective productions, with a positive environment and support for growth personally and professionally.”
            </p>
            <p className="text-align-left">
            Hello there, I'm JP a UI/UX Designer and an aspiring Front-end Developer from Cavite, Philippines. I always love to challenge myself in an interesting and useful web and mobile applications, this is where my brain works well, thinking on how the user-experience and systems will work from end-to-end users.
            <br />
            <br />
            I am an INFP-A but sometimes the relative INFP-T also kicks in, my personality strikes as mediator often drift me into deep thought, enjoy contemplating the hypothetical and the philosophical more than any other personality type.
            <br />
            <br />
            When I am not working, I love spending time doing some other creative stuff such as writing songs, poems, short stories, reading interesting and inspirational articles and playing my guitar. I also love to travel and going to heritage places, fishing and just simply nature tripping. I also enjoy playing table tennis, volleyball and going to gym.
            <br />
            <br />
            </p>
          </BaseHome>
        </Base>
              <H3 capitalized>My UX Design Process</H3>
              <p>Each designer has their own process on how they start a project or tasks depending on the level of priority and the deadlines to finish it, here is my process</p>
              <Row className="mb30">
                <BannerImage>
                  <img
                    src={ImageProcess}
                    alt="bargainwheels desktop, tablet and mobile"
                  />
                  <Lead>
                    <br />
                    <h4>Nah, I'm just kidding... this is how the way I really process...</h4>
                  </Lead>
                </BannerImage>
                <Col xs="12">
                  <IconBox>
                  <CustomIconText
                      icon="fa-comments-o"
                      content={(
                        <span>
                          Discussion
                        </span>
                      )}
                    />

                    <CustomIconText
                      icon="fa-lightbulb-o" 
                      content={(
                        <span>
                          Idea
                        </span>
                      )}
                    />
                    <CustomIconText
                      icon="fa-list-alt"
                      content={(
                        <span>
                          Review
                        </span>
                      )}
                    />
                    <CustomIconText
                      icon="fa-pencil"
                      content={(
                        <span>
                          Implement
                        </span>
                      )}
                    />
                    <CustomIconText
                      icon="fa-eye"
                      content={(
                        <span>
                          Final Review
                        </span>
                      )}
                    />
                    <CustomIconText
                      icon="fa-check-circle-o"
                      content={(
                        <span>
                          Deliver
                        </span>
                      )}
                    />
                    <div className="line"></div>
                  </IconBox>
                </Col>
              </Row>
      </Container>
      <WorkExperience />
      <Education />
      <Contact />
    </Template>
  );
}

export default Home;