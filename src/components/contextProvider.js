import React, { createContext, useReducer } from 'react'

export const initialState = {
  loading: false,
  query: '',
  error: '',
  fetching: false,
  searchResult: {
    movies: [],
    movie: {},
    credits: [],
  },
}

const types = {
  LOADING: 'loading',
  QUERY: 'query',
  ERROR: 'error',
  FETCHING: 'fetching',
  SEARCH_RESULT_MOVIES: 'search result movies',
  SEARCH_RESULT_MOVIE: 'search result movie',
  SEARCH_RESULT_CREDITS: 'search result credits',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: !state.loading }
    case types.QUERY:
      return { ...state, query: action.payload }
    case types.SEARCH_RESULT_MOVIES:
      return {
        ...state,
        searchResult: { ...state.searchResult, movies: action.payload },
      }
    case types.SEARCH_RESULT_MOVIE:
      return {
        ...state,
        searchResult: { ...state.searchResult, movie: action.payload },
      }
    case types.SEARCH_RESULT_CREDITS:
      return {
        ...state,
        searchResult: { ...state.searchResult, credits: action.payload },
      }
    case types.ERROR:
      return { ...state, error: action.payload }
    default:
      return
  }
}

const Context = createContext(initialState)

export { types, Context }

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
