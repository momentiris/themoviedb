import React from 'react'
import SearchBar from '../searchBar'
import { render, fireEvent } from 'react-testing-library'
import { Context, types } from '../contextProvider'

describe('components/searchBar', () => {
  it('renders component', () => {
    const { container } = render(<SearchBar />)

    expect(container).toMatchSnapshot()
  })
})

test('dispatches new search value', async () => {
  const dispatch = jest.fn()
  const { container } = render(
    <Context.Provider value={{ dispatch }}>
      <SearchBar />
    </Context.Provider>
  )

  const searchbar = container.querySelector('input')
  fireEvent.change(searchbar, { target: { value: 'Batman' } })
  fireEvent.click(container.querySelector('button'))

  expect(dispatch).toHaveBeenCalledWith({
    type: types.QUERY,
    payload: 'Batman',
  })
})
