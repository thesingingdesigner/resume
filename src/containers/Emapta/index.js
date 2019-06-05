import React from 'react';
import styled, { css } from 'styled-components';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Template from '../../components/Template';
import image from '../../assets/images/bargainwheels-view.png';
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

export default class Emapta extends React.Component {
  render() {
    return (
      <Template>
        <Page grayed>
          <Container>
            <BannerImage>
              <img
                src={image}
                alt="bargainwheels desktop, tablet and mobile"
              />
            </BannerImage>
            <Lead>
              <H1>Junior UX Designer</H1>
              <p>
                Emapta Versatile Services Inc.<br />March 2019 - Present
              </p>
            </Lead>
            <H3>Tools / Technologies used:</H3>
            <div className="skills">
              <UnorderedList>
                <ul>
                  <li>Adobe XD</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe After Effects</li>
                  <li>Wordpress</li>
                  <li>AMP</li>
                  <li>Jira / Confluence</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Git</li>
                  <li>Open VPN</li>
                  <li>WinSCP</li>
                  <li>Bootstrap</li>
                  <li>Slack</li>
                </ul>
              </UnorderedList>
            </div>
          </Container>
        </Page>
        <Page>
          <Container>
            <Row className="mb80 mb-xs-20">
              <Col xs="12" sm="5" md="6">
                <CircledIcon>
                <i className="fa fa-pencil" />
                </CircledIcon>
              </Col>
              <Col xs="12" sm="7" md="6">
                <H2 capitalized>Job Scopes:</H2>
                <ul>
                  <li>Designing functional interfaces and tools that are easy to use, providing improved usability, customer experience and increase conversions</li>
                  <li>Undertake initial research, developing, wireframes and mock-ups, polishing the design, implementing it with HTML5/CSS3 as directed by the UX Designer</li>
                  <li>Testing, evaluating and tweaking all designs before going live</li>
                  <li>Working closely with the Development, Marketing and Customer Service team to ensure designs are functional and relevant to each departments needs</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="5" md="6">
                <CircledIcon>
                  <i className="fa fa-code" />
                </CircledIcon>
              </Col>
              <Col xs="12" sm="7" md="6">
                <H2 className="mb20" capitalized>
                Skills, Tools and Abilities:
                </H2>
                <ul>
                  <li>Adobe Creative Cloud 2018/2019</li>
                  <li>Adept in developing, coding and publishing marketing and advertising collaterals</li>
                  <li>Experienced in web design, UI and frontend design for web products and services</li>
                  <li>Deep understanding of cross-platform and cross browser compatibility (responsive web design)</li>
                  <li>Knowledgeable in CSS3 and HTML5</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Page>
        <Page grayed>
          <Container>
            <H2 capitalized>UX Design Process</H2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                    icon="fa-search"
                    content={(
                      <span>
                        Discussion
                      </span>
                    )}
                    description={(<span>this is  a text</span>)}
                  />
                  
                  <CustomIconText
                    icon="fa-graduation-cap" 
                    content={(
                      <span>
                        Idea
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Review
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Implementation
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Final Review
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
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
            <H2 capitalized>Project I Worked and Participated with...</H2>
            <p>As a UX designer my priority tasks is to design a highly functional interfaces and tools that are easy to use, to provide and improved usability customer experience and increase conversion.</p>
            <Row>
              <Col xs="12">
                <ImageTitle
                  src="/static/media/bargainwheels-view.3832da1b.png"
                  title="VroomVroomVroom"
                  content={(
                    <span>
                      Final Review
                    </span>
                  )}
                />
                <ImageTitle
                  src="/static/media/vroom-view.28572d92.png"
                  title="Bargainwheels"
                  content={(
                    <span>
                      Final Review
                    </span>
                  )}
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="Carhire"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="Whitelabels"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="Closed-User-Group (CUG)"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="Bargainwheels Logo"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="Bargainwheels Mascot"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="Animations"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="AMP Pages"
                />
              </Col>
            </Row>
          </Container>
        </Page>
      </Template>
    );
  }
}
