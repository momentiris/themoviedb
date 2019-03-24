import React, { useContext, useEffect } from 'react'
import Layout from '../components/layout'
import Error from '../components/error'
import { Context, types } from '../components/contextProvider'
import { getDataAsync, withImageUrls } from '../utils'
import Loader from '../components/loader'
import SingleMovie from '../components/singleMovie'

export default ({ match: { params } }, rest) => {
  const { state, dispatch } = useContext(Context)
  const {
    loading,
    error,
    searchResult: { movie },
  } = state

  const getMovie = id => {
    dispatch({ type: types.LOADING })

    Promise.all([
      getDataAsync(id, types.SEARCH_RESULT_MOVIE),
      getDataAsync(id, types.SEARCH_RESULT_CREDITS),
    ])
      .then(([details, credits]) => {
        dispatch({
          type: types.SEARCH_RESULT_MOVIE,
          payload: { details: withImageUrls(details, 780), credits },
        })
        dispatch({ type: types.LOADING })
      })
      .catch(({ message }) => dispatch({ type: types.ERROR, payload: message }))
  }

  useEffect(() => {
    params.id && getMovie(params.id)
  }, [params.id])

  return (
    <Layout>
      {loading && <Loader />}
      {movie.details && <SingleMovie movie={movie} />}
      {error && <Error error={error} />}
    </Layout>
  )
}
