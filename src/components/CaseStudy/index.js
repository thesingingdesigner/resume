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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  height: 320px;
  background-color: #f6f6f6;
  border: 15px solid #ffffff;
  padding: 20px;
  border-radius: 50%;
  width: 320px;
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
    height: 200px;
    width: 200px;
    border: 8px solid #ffffff;
    i {
      font-size: 80px;
    }
  }
`;