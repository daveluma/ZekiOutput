import { render } from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles.css'
//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/variables";
import ConditionalPage from "./pages/conditionals";
import LoopPage from "./pages/loops";
import FirstProgPage from "./pages/firstProg"
import ToysPage from "./pages/toys"

export default function App() {
  
  return <Router>
    <Switch>
    <Route exact path="/" component={MainPage}/>
    <Route exact path="/404" component={NotFoundPage}/>
    <Route exact path="/variables" component={UsersPage}/>
    <Route exact path="/loops" component={LoopPage}/>
    <Route exact path="/conditionals" component={ConditionalPage}/>
    <Route exact path="/first-program" component={FirstProgPage}/>
    <Route exact path="/toys" component={ToysPage}/>
    <Redirect to="/404"/>
    </Switch>
    </Router>
    
}

render(<App />, document.getElementById('root'))

