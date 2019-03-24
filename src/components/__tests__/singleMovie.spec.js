import { render } from 'react-testing-library'
import SingleMovie from '../singleMovie'
import React from 'react'

describe('components/singleMovie', () => {
  const mockedMovie = {
    details: {
      backdrop_path: '123',
      title: 'Lasse Kongo Returns',
    },
    credits: {
      cast: [1, 2, 3, 4],
    },
  }
  it('renders single movie without errors', () => {
    const { container } = render(<SingleMovie movie={mockedMovie} />)

    expect(container).toMatchSnapshot()
  })

  it('renders credits.cast', () => {
    const { container } = render(<SingleMovie movie={mockedMovie} />)
    expect(container.querySelectorAll('.cast-member').length).toEqual(4)
  })
})
