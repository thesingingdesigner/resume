import React from 'react';
import styled, { css } from 'styled-components';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Template from '../../components/Template';
import image from '../../assets/images/filsupport-view.png';
import fs1 from '../../assets/images/fs-1.png';
import fs2 from '../../assets/images/fs-2.png';
import fs3 from '../../assets/images/fs-3.png';
import fs4 from '../../assets/images/fs-4.png';
import fs5 from '../../assets/images/fs-5.png';
import fs6 from '../../assets/images/fs-6.png';
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

export default class Filsupport extends React.Component {
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
              <H1>Web Graphic Designer</H1>
              <p>
                Filsupport<br />November 2011 to March 2014
              </p>
            </Lead>
            <H3>Tools / Technologies used:</H3>
            <div className="skills">
              <UnorderedList>
              <ul>
                <li>Pen and Paper</li>
                <li>Adobe Photoshop</li>
                <li>Adobe After Effects</li>
                <li>Adobe Illustrator</li>
                <li>Axure RP</li>
                <li>Wordpress</li>
                <li>Filezilla</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Bootstrap</li>
                <li>Skype</li>
                <li>Notepad++</li>
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
            <H2 capitalized>Project I Worked and Participated with...</H2>
            <p>As a Web Graphic Designer my priority tasks is to design a highly functional interfaces and prototypes that are easy to use, to provide and improved usability customer experience.</p>
            <Row>
              <Col xs="12">
                <ImageTitle
                  src={fs1}
                  title="Shapiro and Sher (LVFH)"
                  content={(
                    <span>
                      Web design and prototype development
                    </span>
                  )}
                />
                <ImageTitle
                  src={fs2}
                  title="Carney"
                  content={(
                    <span>
                      Web design and prototype development
                    </span>
                  )}
                />
                <ImageTitle
                  src={fs3}
                  title="Looplane"
                  content={(
                    <span>
                      CMS Blog/Article Web design
                    </span>
                  )}
                />
                <ImageTitle
                  src={fs4}
                  title="Pitts Tamperproof"
                  content={(
                    <span>
                      E-commerce redesign website
                    </span>
                  )}
                />
                <ImageTitle
                  src={fs5}
                  title="Camden West"
                  content={(
                    <span>
                      Music / Celebrity profile web design
                    </span>
                  )}
                />
                <ImageTitle
                  src={fs6}
                  title="Rocketcash"
                  content={(
                    <span>
                      Lending web design
                    </span>
                  )}
                />
              </Col>
            </Row>
          </Container>
        </Page>
      </Template>
    );
  }
}
