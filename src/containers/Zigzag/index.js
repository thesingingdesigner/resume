import React from 'react';
import styled, { css } from 'styled-components';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Template from '../../components/Template';
import image from '../../assets/images/vroom-view.png';
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

export default class Zigzag extends React.Component {
  render() {
    return (
      <Template>
        <Page grayed>
          <Container>
            <BannerImage>
              <img
                src={image}
                alt="Different platform designs"
              />
            </BannerImage>
            <Lead>
              <H1>UI/UX Designer</H1>
              <p>
              Zigzag Media Inc.,<br />March 2015 to March 2019
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
                  <i className="fa fa-graduation-cap" />
                </CircledIcon>
              </Col>
              <Col xs="12" sm="7" md="6">
                <H2 capitalized>Job Scopes:</H2>
                <ul>
                  <li>Closely coordinate and work with various departments for all campaigns that require visuals, videos and similar creative for purposes of marketing, advertising and/or branding</li>
                  <li>Plan concepts by studying information and materials</li>
                  <li>Secure approval of concept by submitting mock ups</li>
                  <li>Perform design-related programming slicing (HTML/CSS)</li>
                  <li>Development and provision of designs that are reflective of the online brands managed in-house</li>>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="5" md="6">
                <CircledIcon>
                  <i className="fa fa-graduation-cap" />
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
                  <li>Email template using MJML</li>
                  <li>AMP pages for blog and post</li>
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
              <Col xs="12">
                <IconBox>
                <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        User<br />
                        Research
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Build User<br />
                        Persona
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Create User<br />
                        Stories
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Wireframe<br />
                        Design
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Visual Design<br />
                        Prototype
                      </span>
                    )}
                  />
                  <CustomIconText
                    icon="fa-graduation-cap"
                    content={(
                      <span>
                        Design<br />
                        Validations
                      </span>
                    )}
                  />
                  <div className="line"></div>
                </IconBox>
              </Col>
            </Row>
            <H2 capitalized>Project I Worked and Participated with...</H2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Row>
              <Col xs="12">
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
                <ImageTitle
                  src="https://via.placeholder.com/350x220"
                  title="VroomVroomVroom"
                />
              </Col>
            </Row>
          </Container>
        </Page>
      </Template>
    );
  }
}
