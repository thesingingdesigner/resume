import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Timeline from '../../components/Timeline';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const CustonContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 40px;
`;


const timelineData = [
  {
    title: 'Emapta Versatile Services Inc.',
    date: 'March 2019 - present',
    category: {
      tag: 'Junior UX Designer',
      color: '#8493ff'
    },
    account: 'VroomVroomVroom / Hiccup Insurance',
    department: 'Development Team',
    text: `A car rental company based in Australia that cater different countries (Australia, United Kingdom, United States, Canada and New Zealand), my main job objective is to designs a very functional interfaces and tools that are easy to use, providing improved usability, customer experience and increase conversions.`,
    link: {
      url: '/job-scope-and-projects/emapta',
      text: 'View Case Study'
    }
  },
  {
    title: 'Zigzag Media Inc.',
    date: 'march 2015 - march 2019',
    category: {
      tag: 'ui / ux designer',
      color: '#8493ff'
    },
    account: 'VroomVroomVroom / Hiccup Insurance',
    department: 'Development Team',
    text: `A car rental company based in Australia that cater different countries (Australia, United Kingdom, United States, Canada and New Zealand), my main job objective is to designs a very functional interfaces and tools that are easy to use, providing improved usability, customer experience and increase conversions.`,
    link: {
      url: '/job-scope-and-projects/zigzag',
      text: 'View Case Study'
    }
  },
  {
    title: 'One Jump Web Inc.',
    date: 'january 2015 - march 2015',
    category: {
      tag: 'web graphic artist',
      color: '#8493ff'
    },
    account: 'One Jump Web Inc.',
    department: 'DESIGN TEAM',
    text: `An e-Commerce based in United States with satellite office in Makati, selling refurbished gadgets such as mobile phones and tablets.`,
  },
  {
    title: 'filsupport',
    date: 'november 2011 - march 2014',
    category: {
      tag: 'web graphic designer',
      color: '#8493ff'
    },
    account: 'Filsupport',
    department: 'DESIGN TEAM',
    text: `An outsourcing company that focuses on SEO, Internet Marketing and Web Design, catering multiple businesses from different countries`,
    link: {
      url: '/job-scope-and-projects/filsupport',
      text: 'View Case Study'
    }
  },
  {
    title: 'Nahel',
    date: 'april 2011 - october 2011',
    category: {
      tag: 'jr. graphic designer',
      color: '#8493ff'
    },
    account: 'Nahel',
    department: 'DESIGN TEAM',
    text: `An e-Commerce based in Dubai with satellite office in Makati, that focus on internet marketing such as ad banners and social media community.`,
  },
  {
    title: 'dreamladders',
    date: 'january 2008 - march 2011',
    category: {
      tag: 'graphic designer†(printing)',
      color: '#8493ff'
    },
    account: 'Dreamladders',
    department: 'PRODUCTION TEAM',
    text: `An event/catering business that caters various occassions such as birthdays, debut, weddings, anniversaries and more.`,
  },
];

function WorkExperience() {
  return (
    <div
      id="work-experience"
      style={{
        backgroundColor: "#f6f6f6",
      }}
    >
      <CustonContainer>
        <Title>Work Experience</Title>
        <Timeline data={timelineData} />
      </CustonContainer>
    </div>
  );
}

export default WorkExperience;