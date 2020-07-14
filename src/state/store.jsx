import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  imageCarousel: [],
  imageBackground: [],
  loading: false,
}

function mainState(state = initialState, action) {
  switch (action.type) {
    case "SET::IMAGE-CAROUSEL": {
      return { ...state, imageCarousel: action.imageCarousel }
    }
    case "SET::IMAGE-BACKGROUND": {
      return { ...state, imageBackground: action.imageBackground }
    }
    case "SET::LOADING": {
      return { ...state, loading: action.loading }
    }
    default: {
      return state;
    }
  }
}

const createActionLoading = (loading) => ({ type: "SET::LOADING", loading: loading })
const createActionImageCarousel = (image) => ({ type: "SET::IMAGE-CAROUSEL", imageCarousel: image })
const createActionImageBackground = (image) => ({ type: "SET::IMAGE-BACKGROUND", imageBackground: image })


export const getResourcesPage = () => (dispatch) => {
  dispatch(createActionLoading(true))

  Promise.all([
    new Promise((resolve, reject) => {
      const result = []
      const hotResult = []
      for (let i = 1; i <= 9; i++) {
        result.push(require(`./../sours/itemCarousel/${i}.jpg`))
      }
      for (let i = 1; i <= 3; i++) {
        hotResult.push(result)
      }
      resolve(hotResult)
    }),
    new Promise((resolve, reject) => {
      const result = []
      for (let i = 1; i <= 8; i++) {
        result.push(require(`./../sours/background/${i}.jpg`))
      }
      resolve(result)
    }),
  ]).then(([carousel, background]) => {
    dispatch(createActionImageCarousel(carousel))
    dispatch(createActionImageBackground(background))
    dispatch(createActionLoading(false))
  })
}


const rootReducers = combineReducers({ mainState })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(...middleware)));


