import * as homeApi from '../Api/homeApi';

// home 받아오기
const GET_HOME = 'home/GET_HOME';
const GET_HOME_SUCCESS = 'home/GET_HOME_SUCCESS';
const GET_HOME_ERROR = 'home/GET_HOME_ERROR';

export const getHome = id => async dispatch => {
  console.log('gethome');
  dispatch({ type: GET_HOME }); // 요청이 시작됨
  try {
    const home = await homeApi.getHome(id); // Api 호출
    dispatch({ type: GET_HOME_SUCCESS, home }); // 성공
  } catch (e) {
    dispatch({ type: GET_HOME_ERROR, error: e }); // 실패
  }
};

const initialState = {
  homeState: { isLoading: false, home: null, error: null },
  reservationState: {},
};

// 리듀서
const home = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
      return {
        ...state,
        homeState: { isLoading: true, home: null, error: null },
      };
    case GET_HOME_SUCCESS:
      return {
        ...state,
        homeState: { isLoading: false, home: action.home, error: null },
      };
    case GET_HOME_ERROR:
      return {
        ...state,
        homeState: { isLoading: false, home: null, error: action.error },
      };
    default:
      return state;
  }
};

export default home;