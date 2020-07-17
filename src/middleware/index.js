import unsplashActions from '../actions';
import {unsplash} from '../utils';
import {USER_PAGE_LIMIT, PHOTO_PAGE_LIMIT} from '../constants';
import {toJson} from 'unsplash-js';

export const resetImages = () => (dispatch, getState) => {
  dispatch(unsplashActions.resetImages());
};

export const setQuery = (query) => (dispatch, getState) => {
  dispatch(unsplashActions.setQuery(query));

  dispatch(unsplashActions.setSearchResults());
  unsplash.search
    .users(query, 1, USER_PAGE_LIMIT)
    .then(toJson)
    .then((json) => {
      dispatch(unsplashActions.setSearchResultsSuccess(json.results));
      dispatch(unsplashActions.setLoadMore(json.total > USER_PAGE_LIMIT));
    })
    .catch((err) => {
      console.error('getUserList', err);
      dispatch(unsplashActions.setLoadMore(false));
      dispatch(unsplashActions.setSearchResultsFailure(err));
    });
};

export const findImages = (id) => (dispatch, getState) => {
  dispatch(unsplashActions.setImages());
  unsplash.users
    .photos(id, 1, PHOTO_PAGE_LIMIT)
    .then(toJson)
    .then((json) => {
      dispatch(unsplashActions.setImagesSuccess(json));
      dispatch(
        unsplashActions.setLoadMoreImages(json.length == PHOTO_PAGE_LIMIT),
      );
    })
    .catch((err) => {
      console.error('getUserImages', err);
      dispatch(unsplashActions.setLoadMoreImages(false));
      dispatch(unsplashActions.setImagesFailure(err));
    });
};

export const loadMore = () => (dispatch, getState) => {
  dispatch(unsplashActions.setSearchResults());
  unsplash.search
    .users(
      getState().unsplash.query,
      getState().unsplash.users.length / USER_PAGE_LIMIT + 1,
      USER_PAGE_LIMIT,
    )
    .then(toJson)
    .then((json) => {
      let nUserList = getState().unsplash.users.slice();
      nUserList = nUserList.concat(json.results);
      dispatch(unsplashActions.setSearchResultsSuccess(nUserList));
      dispatch(unsplashActions.setLoadMore(json.total > nUserList.length));
    })
    .catch((err) => {
      console.error('getUserList', err);
      dispatch(unsplashActions.setLoadMore(false));
      dispatch(unsplashActions.setSearchResultsFailure(err));
    });
};

export const loadMoreImages = (id) => (dispatch, getState) => {
  dispatch(unsplashActions.setImages());
  unsplash.users
    .photos(
      id,
      getState().unsplash.images.length / PHOTO_PAGE_LIMIT + 1,
      PHOTO_PAGE_LIMIT,
    )
    .then(toJson)
    .then((json) => {
      let nList = getState().unsplash.images.slice();
      nList = nList.concat(json);
      dispatch(unsplashActions.setImagesSuccess(nList));
      dispatch(unsplashActions.setLoadMoreImages(true));
    })
    .catch((err) => {
      console.error('getUserImages', err);
      dispatch(unsplashActions.setLoadMoreImages(false));
      dispatch(unsplashActions.setImagesFailure(err));
    });
};
