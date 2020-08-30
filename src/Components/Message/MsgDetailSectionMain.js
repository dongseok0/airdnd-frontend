import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import MsgDetailTitleBox from '../Message/MsgDetailTitleBox';
import MsgDetailReservedHomeBox from '../Message/MsgDetailReservedHomeBox';
import MsgDetailSubInfoBox from '../Message/MsgDetailSubInfoBox';
import MsgDetailAddressBox from '../Message/MsgDetailAddressBox';
import MsgDetailReservedHomeLinkBox from '../Message/MsgDetailReservedHomeLinkBox';
import MsgDetailHostInfoPageLinkBox from '../Message/MsgDetailHostInfoPageLinkBox';
import MsgDetailSettlementBox from '../Message/MsgDetailSettlementBox';
import MsgDetailAirbnbSupportTeamBox from '../Message/MsgDetailAirbnbSupportTeamBox';

const MsgDetailSectionMain = () => {
  const isCanceled = false; // 전역관리

  return (
    <MsgDetailSectionMainWrapper>
      <MsgDetailSectionMainInner>
        {isCanceled ? (
          <>
            <MsgDetailTitleBox />
            <MsgDetailReservedHomeBox />
            <MsgDetailSubInfoBox />
            <MsgDetailAirbnbSupportTeamBox />
          </>
        ) : (
          <>
            <MsgDetailTitleBox />
            <MsgDetailReservedHomeBox />
            <MsgDetailSubInfoBox />
            <MsgDetailAddressBox />
            <MsgDetailReservedHomeLinkBox />
            <MsgDetailHostInfoPageLinkBox />
            <MsgDetailSettlementBox />
            <MsgDetailAirbnbSupportTeamBox />
          </>
        )}
      </MsgDetailSectionMainInner>
    </MsgDetailSectionMainWrapper>
  );
};

const MsgDetailSectionMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: calc(100vh - 15.5rem);
  border-left: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  overflow: scroll;
`;

const MsgDetailSectionMainInner = styled.div`
  & > div + div {
    border-top: 5px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
    border-bottom: 3px solid
      ${({ theme }) => darken(0.1, theme.color.lightGray)};
  }
  & > :last-child {
    border: none;
    padding-bottom: 7rem;
  }
`;

export default MsgDetailSectionMain;