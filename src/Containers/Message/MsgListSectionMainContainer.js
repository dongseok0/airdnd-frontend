import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionMain from '../../Components/Message/MsgListSectionMain';
import { allMsgList } from '../../Modules/message';

const MsgListSectionMainContainer = () => {
  // ! 작업중
  // redux
  const { filteredMsgs } = useSelector(state => state.message);
  const dispatch = useDispatch();

  // variable
  const hasMsgs = filteredMsgs.length;

  // 마운트 되었을 때 allMsgList가 바로 렌더링
  useEffect(() => {
    dispatch(allMsgList(0));
  }, [dispatch]);

  return <MsgListSectionMain hasMsgs={hasMsgs} filteredMsgs={filteredMsgs} />;
};

export default MsgListSectionMainContainer;