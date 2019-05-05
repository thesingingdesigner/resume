import React from 'react';
import styled from 'styled-components';
import Timeline from '../../components/Timeline';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const timelineData = [
  {
    text: `To create fresh and advance technique layout or design for website and mobile applications that will benefit and satisfied the client’s need. Creating a prototype for User-Experience / Interface using Axure 7 and uploading them on server for clients viewing. Making new layout and/or revisions for front-end and back-end websites, web banners, logo's, brochures, gif's or animated images, icons, email campaigns, landing pages, and printing materials. Photo enhancement, restorations, background removal and more.`,
    title: 'FILSUPPORT',
    date: 'NOVEMBER 2011 TO MARCH 2014',
    category: {
      tag: 'Web Graphic Designer',
      color: '#8493ff'
    },
    link: {
      url: '/case-study-1/#title-one',
      text: 'View Case Study'
    }
  },
  {
    text: `To create fresh and advance technique layout or design for website and mobile applications that will benefit and satisfied the client’s need. Creating a prototype for User-Experience / Interface using Axure 7 and uploading them on server for clients viewing. Making new layout and/or revisions for front-end and back-end websites, web banners, logo's, brochures, gif's or animated images, icons, email campaigns, landing pages, and printing materials. Photo enhancement, restorations, background removal and more.`,
    title: 'FILSUPPORT',
    date: 'NOVEMBER 2011 TO MARCH 2014',
    category: {
      tag: 'Web Graphic Designer',
      color: '#8493ff'
    },
    link: {
      url: '/case-study-1/#title-one',
      text: 'View Case Study'
    }
  },
  {
    text: `To create fresh and advance technique layout or design for website and mobile applications that will benefit and satisfied the client’s need. Creating a prototype for User-Experience / Interface using Axure 7 and uploading them on server for clients viewing. Making new layout and/or revisions for front-end and back-end websites, web banners, logo's, brochures, gif's or animated images, icons, email campaigns, landing pages, and printing materials. Photo enhancement, restorations, background removal and more.`,
    title: 'FILSUPPORT',
    date: 'NOVEMBER 2011 TO MARCH 2014',
    category: {
      tag: 'Web Graphic Designer',
      color: '#8493ff'
    },
    link: {
      url: '/case-study-1/#title-one',
      text: 'View Case Study'
    }
  },
  {
    text: `To create fresh and advance technique layout or design for website and mobile applications that will benefit and satisfied the client’s need. Creating a prototype for User-Experience / Interface using Axure 7 and uploading them on server for clients viewing. Making new layout and/or revisions for front-end and back-end websites, web banners, logo's, brochures, gif's or animated images, icons, email campaigns, landing pages, and printing materials. Photo enhancement, restorations, background removal and more.`,
    title: 'FILSUPPORT',
    date: 'NOVEMBER 2011 TO MARCH 2014',
    category: {
      tag: 'Web Graphic Designer',
      color: '#8493ff'
    },
    link: {
      url: '/case-study-1/#title-one',
      text: 'View Case Study'
    }
  },
];

function WorkExperience() {
  return (
    <div id="work-experience">
      <Title>Work Experience</Title>
      <Timeline data={timelineData} />
    </div>
  );
}

export default WorkExperience;