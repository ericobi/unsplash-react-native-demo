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

export default class unsplashActions {
  static resetImages() {
    return {
      type: RESET_IMAGES,
    };
  }
  static setLoadMoreImages(bMore) {
    return {
      type: SET_LOAD_MORE_IMAGES,
      payload: bMore,
    };
  }
  static setImages() {
    return {
      type: SET_IMAGES,
    };
  }

  static setImagesSuccess(data) {
    return {
      type: SET_IMAGES_SUCCESS,
      payload: data,
    };
  }

  static setImagesFailure(error) {
    return {
      type: SET_IMAGES_FAILURE,
      error,
    };
  }

  static setSearchResults() {
    return {
      type: SET_SEARCH_RESULTS,
    };
  }

  static setSearchResultsSuccess(data) {
    return {
      type: SET_SEARCH_RESULTS_SUCCESS,
      payload: data,
    };
  }

  static setSearchResultsFailure(error) {
    return {
      type: SET_SEARCH_RESULTS_FAILURE,
      error,
    };
  }
  static setQuery(query) {
    return {
      type: SET_QUERY,
      payload: query,
    };
  }
  static setLoadMore(bFlag) {
    return {
      type: SET_LOAD_MORE,
      payload: bFlag,
    };
  }
}
