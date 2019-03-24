import React, { useContext, useEffect } from 'react'
import SearchBar from '../components/searchBar'
import { Context, types } from '../components/contextProvider'
import { getDataAsync, withImageUrls } from '../utils'
import Error from '../components/error'
import MoviePreview from '../components/moviePreview'
import Layout from '../components/layout'
import Loader from '../components/loader'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.3em;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export default () => {
  const { state, dispatch } = useContext(Context)
  const {
    query,
    loading,
    error,
    searchResult: { movies },
  } = state

  const getMovies = query => {
    dispatch({ type: types.LOADING })
    getDataAsync(query, types.SEARCH_RESULT_MOVIES)
      .then(data => {
        const withImagesAndSorted = data.results
          .map(m => withImageUrls(m, 185))
          .sort((a, b) => (a.popularity > b.popularity ? -1 : 1))

        dispatch({
          type: types.SEARCH_RESULT_MOVIES,
          payload: withImagesAndSorted,
        })
        dispatch({ type: types.LOADING })
      })
      .catch(({ message }) => dispatch({ type: types.ERROR, payload: message }))
  }

  useEffect(() => {
    query && getMovies(query)
  }, [query])

  return (
    <Layout>
      <Header>Find a companion to your lonely evening.</Header>
      <SearchBar />
      {loading && <Loader />}
      {error && <Error error={error} />}
      {movies && <MoviePreview movies={movies} />}
    </Layout>
  )
}
