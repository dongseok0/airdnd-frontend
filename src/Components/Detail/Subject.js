import React from 'react';
import styled, { css } from 'styled-components';
import { FaCrown } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { MdShare } from 'react-icons/md';
import Rating from '../Global/Rating';
import Button from '../Global/Button';
import HomePhotos from './HomePhotos';

const Subject = () => {
  return (
    <StDetailTitle>
      <h2>S9[공항 1.7km, 5분] 퀸베드 1개 프리미엄 레지던스,제주의 중심</h2>
      <StLinkWrapper>
        <Rating scale="1.4" rate="4.55" count="67" />
        <StDot>·</StDot>
        <StSuperHost>
          <FaCrown style={{ color: '#FF385C' }} />
          <span>슈퍼호스트</span>
        </StSuperHost>
        <StDot>·</StDot>
        <StLocationLink>Cheiu, 제주도, 한국</StLocationLink>
        <StButton>
          <MdShare />
          공유하기
        </StButton>
        <StButton>♡ 저장</StButton>
      </StLinkWrapper>
      <HomePhotos></HomePhotos>
    </StDetailTitle>
  );
};

const inlineFlex = css`
  display: inline-flex;
  align-items: center;
`;

const StDetailTitle = styled.section`
  /* background-color: #ddd; */
  max-width: 1120px;
  margin: 2.4rem auto 0;
  & h2 {
    margin-bottom: 0.4rem;
    font-size: 2.6rem;
    line-height: 30px;
    font-weight: 600;
    word-break: break-word;
  }
`;

const StLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const StDot = styled.span`
  margin: 0 8px;
`;

const StSuperHost = styled.span`
  ${inlineFlex}
  color: ${({ theme }) => theme.darkGray};
  
  & svg {
    margin-right: 4px;
  }
`;

const StLocationLink = styled.a`
  flex-grow: 1;
  color: ${({ theme }) => theme.darkGray};
  text-decoration: underline;
`;

const StButton = styled(Button)`
  border: none;
  padding: 0.8rem;
  font-size: 14px;
  text-decoration: underline;
  font-weight: 500;

  & svg {
    margin-right: 8px;
  }
`;

export default Subject;