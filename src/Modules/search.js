import * as api from '../Api/Api';
import { fetchDataThunk, reducerUtils } from '../lib/asyncUtils';

const FETCH_DATA = 'search/FETCH_DATA';
const FETCH_DATA_SUCCESS = 'search/FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'search/FETCH_DATA_ERROR';

const HOVER_HOME = 'search/HOVER_HOME';
const BLUR_HOME = 'search/BLUR_HOME';
const CHANGE_HEART = 'search/CHANGE_HEART';

const OPEN_HEADER = 'search/OPEN_HEADER';
const CLOSE_HEADER = 'search/CLOSE_HEADER';

const OPEN_MAP = 'search/OPEN_MAP';
const CLOSE_MAP = 'search/CLOSE_MAP';
const SHOW_MAP = 'search/SHOW_MAP';
const HIDE_MAP = 'search/HIDE_MAP';
const ZOOM_IN = 'search/ZOOM_IN';
const ZOOM_OUT = 'search/ZOOM_OUT';
const ZOOM_SET = 'search/ZOOM_SET';
const OPEN_MARKER = 'search/OPEN_MARKER';
const CLOSE_MARKER = 'search/CLOSE_MARKER';

const OPEN_POPUP = 'search/OPEN_POPUP';
const CLOSE_POPUP = 'search/CLOSE_POPUP';
const HANDLE_RANGE = 'search/HANDLE_RANGE';
const SET_FILTER = 'search/SET_FILTER';
const RESET_FILTER = 'search/RESET_FILTER';
const SAVE_FILTER = 'search/SAVE_FILTER';

const APPLY_TOGGLE_FILTER = 'search/APPLY_TOGGLE_FILTER';
const APPLY_COUNTER_FILTER = 'search/APPLY_COUNTER_FILTER';
const APPLY_CHECK_FILTER = 'search/APPLY_CHECK_FILTER';
const SET_MODAL_FILTER = 'search/SET_MODAL_FILTER';
const RESET_MODAL_FILTER = 'search/RESET_MODAL/FILTER';

export const fetchData = fetchDataThunk(FETCH_DATA, api.fetchSearchedData);

export const hoverHome = homeId => ({ type: HOVER_HOME, homeId });
export const blurHome = () => ({ type: BLUR_HOME });
export const changeHeart = homeId => ({ type: CHANGE_HEART, homeId });

export const openHeader = () => ({ type: OPEN_HEADER });
export const closeHeader = () => ({ type: CLOSE_HEADER });

export const openMap = () => ({ type: OPEN_MAP });
export const closeMap = () => ({ type: CLOSE_MAP });
export const showMap = () => ({ type: SHOW_MAP });
export const hideMap = () => ({ type: HIDE_MAP });
export const zoomIn = () => ({ type: ZOOM_IN });
export const zoomOut = () => ({ type: ZOOM_OUT });
export const zoomSet = zoom => ({ type: ZOOM_SET, zoom });
export const openMarker = id => ({ type: OPEN_MARKER, id });
export const closeMarker = () => ({ type: CLOSE_MARKER });

export const openPopup = name => ({ type: OPEN_POPUP, name });
export const closePopup = name => ({ type: CLOSE_POPUP, name });
export const handleRange = handler => ({ type: HANDLE_RANGE, handler });
export const setFilter = (name, value) => ({ type: SET_FILTER, name, value });
export const resetFilter = name => ({ type: RESET_FILTER, name });
export const saveFilter = (name, value, state) => ({
  type: SAVE_FILTER,
  name,
  value,
  state,
});

export const applyToggleFilter = (name, value) => ({
  type: APPLY_TOGGLE_FILTER,
  name,
  value,
});
export const applyCounterFilter = (name, value) => ({
  type: APPLY_COUNTER_FILTER,
  name,
  value,
});
export const applyCheckFilter = (list, name, value) => ({
  type: APPLY_CHECK_FILTER,
  list,
  name,
  value,
});
export const setModalFilter = modalFilter => ({
  type: SET_MODAL_FILTER,
  modalFilter,
});
export const resetModalFilter = filterCondition => ({
  type: RESET_MODAL_FILTER,
  filterCondition,
});
export const modalFilterInit = filterCondition => {
  const filter = {};
  const {
    instantBooking,
    bedroom,
    convenience,
    convenienceList,
    facilityList,
    hostLangList,
  } = filterCondition;
  if (instantBooking) filter.instantBooking = false;
  if (bedroom) filter.bedroom = { bed: 0, room: 0, bathroom: 0 };
  if (convenience) filter.convenience = false;
  if (convenienceList) {
    filter.convenienceList = {};
    convenienceList.forEach(item => (filter.convenienceList[item] = false));
  }
  if (facilityList) {
    filter.facilityList = {};
    facilityList.forEach(item => (filter.facilityList[item] = false));
  }
  if (hostLangList) {
    filter.hostLangList = {};
    hostLangList.forEach(item => (filter.hostLangList[item] = false));
  }
  return filter;
};

const filterInit = {
  refund: false,
  roomType: {
    house: false,
    private: false,
    shared: false,
  },
  price: {
    min: 12000,
    max: 1000000,
  },
};

const popupInit = {
  refund: false,
  roomType: false,
  price: false,
  modal: false,
};

const initialState = {
  ...reducerUtils.initial(),
  searchForm: {},
  headerState: false,
  viewState: 'result',
  mapState: true,
  mapZoom: 12,
  markerState: null,
  hoveredHome: null,
  popup: popupInit,
  filterDisabled: {
    refund: true,
    roomType: true,
    price: true,
    modal: true,
  },
  filterApplied: {
    ...filterInit,
    instantBooking: false,
    bedroom: {
      bed: 0,
      room: 0,
      bathroom: 0,
    },
    // convenience: false,
    // convenienceList: {
    //   주방: false,
    //   샴푸: false,
    //   난방: false,
    //   에어컨: false,
    //   다리미: false,
    //   // ...
    // },

    // facilityList: {
    //   헬스장: false,
    //   수영장: false,
    //   // ...
    // },

    // hostLangList: {
    //   영어: false,
    //   프랑스어: false,
    //   // ...
    // },
  },

  // data: null,
  // map 범위 보낼때
  // mapSend: {
  //   from: { lat: 0, lng: 0 },
  //   to: { lat: 0, lng: 0 },
  // },
};

// reducer
const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        ...reducerUtils.loading(),
        searchForm: action.param,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...reducerUtils.success(action.payload),
        filterApplied: {
          ...state.filterApplied,
          ...modalFilterInit(action.payload.filterCondition),
        },
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        ...reducerUtils.error(action.payload),
      };
    case HOVER_HOME:
      return {
        ...state,
        hoveredHome: action.homeId,
      };
    case BLUR_HOME:
      return {
        ...state,
        hoveredHome: null,
      };
    case CHANGE_HEART:
      return {
        ...state,
        data: {
          ...state.data,
          homes: state.data.homes.map(home =>
            home.homeId === action.homeId
              ? { ...home, isBookmarked: !home.isBookmarked }
              : home,
          ),
          // recentHomes: state.data.recentHomes.map(home =>
          //   home.homeId === action.homeId
          //     ? { ...home, isBookmarked: !home.isBookmarked }
          //     : home,
          // ),
        },
      };
    case OPEN_HEADER:
      return {
        ...state,
        headerState: true,
      };
    case CLOSE_HEADER:
      return {
        ...state,
        headerState: false,
      };
    case SHOW_MAP:
      return {
        ...state,
        mapState: true,
      };
    case HIDE_MAP:
      return {
        ...state,
        mapState: false,
      };
    case OPEN_MAP:
      return {
        ...state,
        viewState: 'map',
      };
    case CLOSE_MAP:
      return {
        ...state,
        viewState: 'result',
      };
    case ZOOM_IN:
      return {
        ...state,
        mapZoom: state.mapZoom + 1,
      };
    case ZOOM_OUT:
      return {
        ...state,
        mapZoom: state.mapZoom - 1,
      };
    case ZOOM_SET:
      return {
        ...state,
        mapZoom: action.zoom,
      };
    case OPEN_MARKER:
      return {
        ...state,
        markerState: action.id,
      };
    case CLOSE_MARKER:
      return {
        ...state,
        markerState: null,
      };
    case OPEN_POPUP:
      return {
        ...state,
        popup: {
          ...state.popup,
          [action.name]: true,
        },
      };
    case CLOSE_POPUP:
      return {
        ...state,
        popup: {
          ...state.popup,
          [action.name]: false,
        },
      };
    case SET_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case RESET_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: filterInit[action.name],
        },
      };
    case SAVE_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
        filterDisabled: {
          ...state.filterDisabled,
          [action.name]: action.state,
        },
        popup: popupInit,
      };
    case APPLY_TOGGLE_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case APPLY_COUNTER_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          bedroom: {
            ...state.filterApplied.bedroom,
            [action.name]: action.value,
          },
        },
      };
    case APPLY_CHECK_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.list]: {
            ...state.filterApplied[action.list],
            [action.name]: action.value,
          },
        },
      };
    case SET_MODAL_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...action.modalFilter,
        },
        popup: popupInit,
      };
    case RESET_MODAL_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...modalFilterInit(state.data.filterCondition),
        },
      };
    default:
      return state;
  }
};

export default search;
