import * as React from 'react'
import { Context, initialState } from './components/contextProvider'
import { BrowserRouter as Router } from 'react-router-dom'

import { render as rtlRender } from 'react-testing-library'

export const dispatch = jest.fn()
export const state = initialState

export const render = (children, state = initialState) => {
  return rtlRender(
    <Context.Provider value={{ dispatch, state }}>
      <Router>{children}</Router>
    </Context.Provider>
  )
}
