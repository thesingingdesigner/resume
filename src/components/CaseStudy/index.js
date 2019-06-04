import React from 'react';
import styled, { css } from 'styled-components';

export const Page = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  ${props =>
    props.grayed &&
    css`
      background: #f6f6f6;
    `};
`;

export const BannerImage = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px;
  img {
    width: 100%;
  }
`;

export const Lead = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  p {
    margin-bottom: 0px;
  }
`;

export const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
  ${props =>
    props.capitalized &&
    css`
      text-transform: uppercase;
    `};
`;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const UnorderedList = styled.div`
  ul {
    padding: 0px;
  }
`;

export const ImageTitle = ({ src, title }) => {
  const Image = styled.div`
    float: left;
    width: 33.33%;
    @media (max-width: 767px) {
      width: 100%;
    }
    .item {
      margin: 0px 18px 22px 0px;
      img {
        width: 100%;
        margin-bottom: 5px;
      }
      .title {
        text-align: center;
        font-weight: bold;
      }
    }
  `;
  return (
    <Image>
      <div className="item">
        <img src={src} alt={title} />
        <div className="title">{title}</div>
      </div>
    </Image>
  );
}

export const CircledIcon = styled.div`
  height: 320px;
  width: 320px;
  border: 15px solid #ffffff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  background-color: #f6f6f6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  i {
    font-size: 150px;
    color: #8699b1;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px;
    height: 150px;
    width: 150px;
    border: 8px solid #ffffff;
    i {
      font-size: 80px;
    }
  }
  ${props =>
    props.small &&
    css`
      height: 140px;
      width: 140px;
      border: 8px solid #ffffff;
      padding: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      i {
        font-size: 50px;
      }
    `};
`;

export const IconText = styled.div`
  position: relative;
  .content {
    text-align: center;
  }
  .text {
    text-transform: uppercase;
    line-height: 16px;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const IconTextInline = styled.div`
  float: left;
  position: relative;
  z-index: 1;
  width: 16.66%;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    ${CircledIcon} {
      width: 110px;
      height: 110px;
    }
    i {
      font-size: 30px;
    }
    .text {
      font-size: 9px;
      line-height: 11px;
    }
  }
`;

export const CustomIconText = ({ icon, content }) => {
  return (
    <IconTextInline>
      <IconText>
        <CircledIcon classname="circled-icon" small>
          <div className="content">
            <i className={`fa ${icon}`} />
            <div className="text">
              {content}
            </div>
          </div>
        </CircledIcon>
      </IconText>
    </IconTextInline>
  );
}

export const IconBox = styled.div`
  position: relative;
  height: 140px;
  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
  }
  .line {
    height: 8px;
    background-color: #8699b1;
    width: 85%;
    margin: 0 auto;
    top: 50%;
    position: absolute;
    left: 7%;
    @media (max-width: 767px) {
      height: 130vh;
      width: 8px;
      margin: 0 auto;
      position: absolute;
      left: calc(50% - 4px);
    }
  }
`;