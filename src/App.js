import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContextProvider from './components/contextProvider'
import Loader from './components/loader'

const Start = React.lazy(() => import('./views/start'))
const Movie = React.lazy(() => import('./views/movie'))

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <ContextProvider>
        <Router>
          <Route exact path="/" component={Start} />
          <Route exact path="/movie/:id" component={Movie} />
        </Router>
      </ContextProvider>
    </React.Suspense>
  )
}

export default App
