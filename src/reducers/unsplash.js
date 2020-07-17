import {
  SET_QUERY,
  SET_SEARCH_RESULTS,
  SET_SEARCH_RESULTS_SUCCESS,
  SET_SEARCH_RESULTS_FAILURE,
  SET_IMAGES,
  SET_IMAGES_SUCCESS,
  SET_IMAGES_FAILURE,
  SET_LOAD_MORE,
  SET_LOAD_MORE_IMAGES,
  RESET_IMAGES,
} from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  error: {},
  canLoadMore: false,
  canLoadMoreImages: false,
  query: '',
  users: [],
  images: [],
};

export default function unsplashReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOAD_MORE_IMAGES:
      return {
        ...state,
        canLoadMoreImages: action.payload,
      };
    case SET_LOAD_MORE:
      return {
        ...state,
        canLoadMore: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        isError: false,
        error: {},
        query: action.payload,
      };

    case SET_IMAGES:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case RESET_IMAGES: {
      return {
        ...state,
        images: [],
      };
    }
    case SET_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.payload,
      };
    case SET_IMAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case SET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case SET_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    default:
      return state;
  }
}
