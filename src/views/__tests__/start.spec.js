import React from 'react'
import { render, dispatch, initialState } from '../../testUtils'
import Start from '../../views/start'
import { fireEvent, cleanup } from 'react-testing-library'

describe('views/start', () => {
  afterEach(cleanup) // <-- add this
  it('renders component', () => {
    const { container } = render(<Start />, initialState)
    expect(container).toMatchSnapshot()
  })

  it('rerenders with movies given updated query', () => {
    const mockedMoviesState = {
      ...initialState,
      searchResult: {
        movies: [
          {
            backdrop_path: '123',
            title: 'Lasse Kongo Returns',
          },
          {
            backdrop_path: '123',
            title: 'Lasse Kongo Returns',
          },
        ],
      },
    }
    const { container } = render(<Start />, initialState)
    expect(container).toMatchSnapshot()

    const searchBar = container.querySelector('input')
    fireEvent.change(searchBar, { target: { value: 'Batman' } })
    fireEvent.click(container.querySelector('button'))
    expect(dispatch).toHaveBeenCalled()

    const { container: updatedContainer } = render(<Start />, mockedMoviesState)
    expect(updatedContainer).toMatchSnapshot()
  })
})
