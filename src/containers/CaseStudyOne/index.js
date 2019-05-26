import React from 'react';
import styled, { css } from 'styled-components';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Template from '../../components/Template';
import image from '../../assets/images/bargainwheels-view.png';
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

export default class CaseStudyOne extends React.Component {
  render() {
    return (
      <Template>
        <Page grayed>
          <Container>
            <BannerImage>
              <img
                src={image}
                alt="description"
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
                    <i className="fa fa-graduation-cap" />
                  </CircledIcon>
              </Col>
              <Col xs="12" sm="7" md="6">
                <H2 capitalized>Job Scopes:</H2>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
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
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Page>
        <Page grayed>
          <Container>
            <H2 capitalized>UX Design Process</H2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
