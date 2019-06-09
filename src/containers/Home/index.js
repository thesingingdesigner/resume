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
            <h2>John Paul "JP" Rolle</h2>
            {/* <h6>+63 947 571 8743</h6> */}
            <h4><b>UX/UI Designer</b></h4>
            <br />
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
                    <br /><br />
                    <h4>I'm just kidding, <i class="fa fa-smile-o" aria-hidden="true"></i> this is how I really process</h4>
                  </Lead>
                </BannerImage>
                <Col xs="12">
                  <IconBox>
                  <CustomIconText
                      count={1}
                      icon="fa-comments-o"
                      content={(
                        <span>
                          Discussion
                        </span>
                      )}
                      description={(
                        <ul style={{ padding: '0px 30px' }}>
                          <li>Gathering of information</li>
                          <li>Discussion of business model</li>
                          <li>Asking questions during discussion</li>
                          <li>End meeting with required details</li>
                        </ul>
                      )}
                    />
                    <CustomIconText
                      count={2}
                      icon="fa-lightbulb-o"
                      content={(
                        <span>
                          Idea
                        </span>
                      )}
                      description={(
                        <ul style={{ padding: '0px 30px' }}>
                          <li>Research studies</li>
                          <li>Build user persona and user stories</li>
                          <li>Create user flow / sitemap</li>
                          <li>Build wireframe and interaction prototypes</li>
                        </ul>
                      )}
                    />
                    <CustomIconText
                      count={3}
                      icon="fa-list-alt"
                      content={(
                        <span>
                          Review
                        </span>
                      )}
                      description={(
                        <ul style={{ padding: '0px 30px' }}>
                          <li>Competitor analysis</li>
                          <li>Understand the user stories</li>
                          <li>Identify and point out user flows</li>
                          <li>Review wireframe designs</li>
                        </ul>
                      )}
                    />
                    <div className="next-break" />
                    <CustomIconText
                      count={4}
                      icon="fa-pencil"
                      content={(
                        <span>
                          Implement
                        </span>
                      )}
                      description={(
                        <ul style={{ padding: '0px 30px' }}>
                          <li>Design application</li>
                          <li>Branding applications</li>
                          <li>End-to-end user journey flow</li>
                          <li>UI and visual design</li>
                        </ul>
                      )}
                    />
                    <CustomIconText
                      count={5}
                      icon="fa-eye"
                      content={(
                        <span>
                          Final Review
                        </span>
                      )}
                      description={(
                        <ul style={{ padding: '0px 30px' }}>
                          <li>Gather final feedback</li>
                          <li>Discuss full user journey</li>
                          <li>Designs from different platform</li>
                          <li>Finalize design based on review</li>
                        </ul>
                      )}
                    />
                    <CustomIconText
                      count={6}
                      icon="fa-check-circle-o"
                      content={(
                        <span>
                          Deliver
                        </span>
                      )}
                      description={(
                        <ul style={{ padding: '0px 30px' }}>
                          <li>Send designs to Developer</li>
                          <li>Create style guide for QA</li>
                          <li>Compile designs to repositories</li>
                          <li>Optimize assets and share on productions</li>
                        </ul>
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