import React from 'react';
import styled, { css } from 'styled-components';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Template from '../../components/Template';
import image from '../../assets/images/vroom-view.png';
import VroomImage from '../../assets/images/vroom-view.png';
import CHImage from '../../assets/images/carhire-view.png';
import BWImage from '../../assets/images/bargainwheels-view.png';
import BWLogo from '../../assets/images/bw-logo.png';
import BWKoala from '../../assets/images/bw-koala.png';
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
} from '../../components/CaseStudy';

export default class Zigzag extends React.Component {
  render() {
    return (
      <Template>
        <Page grayed>
          <Container>
            <BannerImage>
              <img
                src={BWImage}
                alt="bargainwheels desktop, tablet and mobile"
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
                <li>Pen and Paper</li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Adobe After Effects</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
                <li>Protopie</li>
                <li>Wordpress</li>
                <li>AMP</li>
                <li>Jira / Confluence</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Git</li>
                <li>Google Suite</li>
                <li>Open VPN</li>
                <li>WinSCP</li>
                <li>Bootstrap</li>
                <li>Slack</li>
                <li>Trello</li>
                <li>VSCode</li>
                <li>Sublime</li>
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
                  <li>Closely coordinate and work with various departments for all campaigns that require visuals, videos and similar creative for purposes of marketing, advertising and/or branding</li>
                  <li>Plan concepts by studying information and materials</li>
                  <li>Secure approval of concept by submitting mock ups</li>
                  <li>Perform design-related programming slicing (HTML/CSS</li>
                  <li>Development and provision of designs that are reflective of the online brands managed in-house</li>
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
                  <li>Email template using MJML</li>
                  <li>AMP pages for blog and post</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Page>
        <Page grayed>
          <Container>
            <H2 capitalized>Project I Worked and Participated with...</H2>
            <p>As a UX designer my priority tasks is to design a highly functional interfaces and tools that are easy to use, to provide and improved usability customer experience and increase conversion.</p>
            <Row>
              <Col xs="12">
                <ImageTitle
                  src={VroomImage}
                  title="VroomVroomVroom"
                  content={(
                    <span>
                      New booking flow design
                    </span>
                  )}
                />
                <ImageTitle
                  src={CHImage}
                  title="Carhire"
                  content={(
                    <span>
                      Part of redesigning the whole site
                    </span>
                  )}
                />
                <ImageTitle
                  src={BWImage}
                  title="Bargainwheels"
                  content={(
                    <span>
                      Redesign of whole site
                    </span>
                  )}
                />
                {/* <ImageTitle
                  src="/static/media/bargainwheels-view.3832da1b.png"
                  title="Whitelabels"
                  content={(
                    <span>
                      Convert into XD | apply new booking flow design
                    </span>
                  )}
                /> */}
                {/* <ImageTitle
                  src="/static/media/bargainwheels-view.3832da1b.png"
                  title="Closed User Group (CUG)"
                  content={(
                    <span>
                      Convert into XD | apply new booking flow design
                    </span>
                  )}
                /> */}
                <ImageTitle
                  src={BWLogo}
                  title="Bargainwheels - Logo"
                  content={(
                    <span>
                      Rebranding and new logo design
                    </span>
                  )}
                />
                <ImageTitle
                  src={BWKoala}
                  title="Bargainwheels Mascot"
                  content={(
                    <span>
                      Mascot design, posture and emotion
                    </span>
                  )}
                />
                {/* <ImageTitle
                  src="/static/media/vroom-view.28572d92.png"
                  title="Animations"
                  content={(
                    <span>
                      Mascot design, posture and emotion
                    </span>
                  )}
                />
                <ImageTitle
                  src="/static/media/vroom-view.28572d92.png"
                  title="AMP Pages"
                  content={(
                    <span>
                      Mascot design, posture and emotion
                    </span>
                  )}
                /> */}
              </Col>
            </Row>
          </Container>
        </Page>
      </Template>
    );
  }
}
