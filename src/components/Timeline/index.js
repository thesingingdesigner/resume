import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
      <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <div className="title">{data.title}</div>
          <time className="date">{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
            <Link to={data.link.url}>
              View Case Study
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