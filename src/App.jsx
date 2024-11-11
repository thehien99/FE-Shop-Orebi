import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./page/Home"
import Router from './router/router'
import Login from './page/Login'
import Shop from './page/Shop'
import HomePage from "./page/HomePage"
import About from "./page/About"
function App() {

  return (
    <Routes>
      <Route path={Router.home} element={<Home />} >
        <Route path='*' element={<HomePage />} />
        <Route path={Router.shop} element={<Shop />} />
        <Route path={Router.about} element={<About />} />
      </Route>
      <Route path={Router.login} element={<Login />} />

    </Routes>
  )
}

export default App
