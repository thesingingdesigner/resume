import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles.scss';

const TextBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
`;

const TimelineItem = ({ data }) => (
  <div
    className="timeline-item"
    style={data.style ? data.style: {}}
  >
      <div className="timeline-item-content">
          <div className="title">{data.title}</div>
          <time className="date">{data.date}</time>
          <span
            className="tag mb10"
            style={{ background: data.category.color }}
          >
            {data.category.tag}
          </span>
          <TextBold className="mb10">
            <div>Account</div>
            {data.account}
          </TextBold>
          <TextBold>
            <div>Department</div>
            {data.department}
          </TextBold>
          <p>{data.text}</p>
          {data.link && (
            <Link to={data.link.url}>
              View Job Scope and Contributions
            </Link>
          )}
          <span className="circle" />
      </div>
  </div>
);

const Timeline = (props) =>
  props.data.length > 0 && (
      <div className="timeline-container">
          {props.data.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
          ))}
      </div>
  );



export default Timeline;