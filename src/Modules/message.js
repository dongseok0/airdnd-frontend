// ACTION TYPE
// view
const SHOW_MESSAGE_DETAIL_SECTION = 'message/SHOW_MESSAGE_DETAIL_SECTION';
const HIDE_MESSAGE_DETAIL_SECTION = 'message/HIDE_MESSAGE_DETAIL_SECTION';
const SHOW_MESSAGE_LIST_SECTION = 'message/SHOW_MESSAGE_LIST_SECTION';
const HIDE_MESSAGE_LIST_SECTION = 'message/HIDE_MESSAGE_LIST_SECTION';
const CHANGE_MEDIA_SIZE = 'message/CHANGE_MEDIA_SIZE';
// message filter
const ARCHAIVE_MESSAGE = 'message/ARCHAIVE_MESSAGE';
const UNARCHAIVE_MESSAGE = 'message/UNARCHAIVE_MESSAGE';
const UNDO = 'message/UNDO';
// message
const MESSAGE_HOST_FLAG = 'message/MESSAGE_HOST_FLAG';

// ACTION CREATOR
// view
export const showMsgDetailSection = () => ({
  type: SHOW_MESSAGE_DETAIL_SECTION,
});
export const hideMsgDetailSection = () => ({
  type: HIDE_MESSAGE_DETAIL_SECTION,
});
export const showMsgListSection = () => ({
  type: SHOW_MESSAGE_LIST_SECTION,
});
export const hideMsgListSection = () => ({
  type: HIDE_MESSAGE_LIST_SECTION,
});
export const changeMediaSize = media => ({
  type: CHANGE_MEDIA_SIZE,
  media,
});
// message filter
export const archiveMsg = () => ({ type: ARCHAIVE_MESSAGE });
export const unarchiveMsg = () => ({ type: UNARCHAIVE_MESSAGE });
export const undo = () => ({ type: UNDO });

// message
export const isHost = isHost => ({
  type: MESSAGE_HOST_FLAG,
  isHost,
});

// INITIAL STATE
const initialState = {
  msgDetailSectionState: true, // default
  msgListSectionState: true, // default
  media: 'large', // large, medium, ipad

  message: [
    // messageState.length = total message(10)
    // unread이면 hide일 수 없음
    {
      id: 1,
      reservationId: 1,
      state: 'all',
      readMsg: true,
      homeId: 1,
      hostname: 'Paul',
    },
    {
      id: 2,
      reservationId: 2,
      state: 'all',
      readMsg: true,
      homeId: 2,
      hostname: 'Bhel',
    },
    {
      id: 3,
      reservationId: 3,
      state: 'all',
      readMsg: false,
      homeId: 3,
      hostname: 'James',
    },
    {
      id: 4,
      reservationId: 4,
      state: 'all',
      readMsg: false,
      homeId: 4,
      hostname: 'Maple',
    },
    {
      id: 5,
      reservationId: 5,
      state: 'all',
      readMsg: false,
      homeId: 5,
      hostname: 'Linda',
    },
    {
      id: 6,
      reservationId: 6,
      state: 'hide',
      readMsg: true,
      homeId: 6,
      hostname: 'June',
    },
    {
      id: 7,
      reservationId: 7,
      state: 'hide',
      readMsg: true,
      homeId: 7,
      hostname: 'Jason',
    },
    {
      id: 8,
      reservationId: 8,
      state: 'hide',
      readMsg: true,
      homeId: 7,
      hostname: 'Ronald',
    },
    {
      id: 9,
      reservationId: 9,
      state: 'hide',
      readMsg: true,
      homeId: 8,
      hostname: 'Krystyn',
    },
    {
      id: 10,
      reservationId: 10,
      state: 'hide',
      readMsg: true,
      homeId: 9,
      hostname: 'John',
    },
  ],
  isHost: false,
};

// REDUCER
const message = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE_DETAIL_SECTION:
      return {
        ...state,
        msgDetailSectionState: true,
      };
    case HIDE_MESSAGE_DETAIL_SECTION:
      return {
        ...state,
        msgDetailSectionState: false,
      };
    case SHOW_MESSAGE_LIST_SECTION:
      return {
        ...state,
        msgListSectionState: true,
      };
    case HIDE_MESSAGE_LIST_SECTION:
      return {
        ...state,
        msgListSectionState: false,
      };
    case CHANGE_MEDIA_SIZE:
      return {
        ...state,
        media: action.media,
      };
    // case HIDE_MESSAGE:
    //   return {
    //     ...state,
    //     // message: state.message.filter(msg => msg.id === action.id ? )
    //   };
    // case UNREAD_MESSAGE:
    //   return {
    //     ...state,
    //     // message:
    //   };
    case MESSAGE_HOST_FLAG:
      return {
        ...state,
        isHost: action.isHost,
      };
    default:
      return state;
  }
};

export default message;
