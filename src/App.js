import './App.scss'
import Home from './page/Home'
import Navbar from './shared/components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Watch from './page/Watch'
import Login from './page/Login'
import Register from './page/Register'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/watch/:movie-id'>
          <Register />
        </Route>
      </Switch>
    </>
  )
}

export default App
