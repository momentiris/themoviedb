import React, { useContext } from 'react'
import { render } from 'react-testing-library'
import ContextProvider, {
  Context,
  initialState,
  reducer,
  types,
} from '../contextProvider'
import 'jest-dom/extend-expect'

describe('components/contextProvider', () => {
  const MockedChild = () => {
    const { state } = useContext(Context)
    return <p>{state.loading ? 'not loading' : 'loading'}</p>
  }

  it('provides context', () => {
    const { getByText } = render(
      <ContextProvider>
        <MockedChild />
      </ContextProvider>
    )
    expect(getByText('loading')).toBeInTheDocument()
  })

  it('updates state', async () => {
    const newState = reducer(initialState, {
      type: types.SEARCH_RESULT_MOVIES,
      payload: [1, 2, 3],
    })

    expect(newState.searchResult.movies).toEqual([1, 2, 3])
  })
})
