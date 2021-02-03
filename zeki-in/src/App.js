import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './styles.css'
//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/variables";
import ConditionalPage from "./pages/conditionals";
import LoopPage from "./pages/loops";
import FirstProgPage from "./pages/firstProg"
import ToysPage from "./pages/toys"

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: '#F4ED1D' }}>Variables</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#F6891F' }}>Conditionals</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#EB5EA2' }}>Loops</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#29ADE3' }}>First Program</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#1BAA4B' }}>Coding Toys</animated.div>,
]

let slides = new Map([
  [0, "variables"],
  [1, "conditionals"],
  [2,  "loops"],
  [3,  "first program"],
  [4,  "toys"]
]);

var ind = 0;

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 5), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  /*
  (
    <div className="simple-trans-main" onClick={onClick}>

      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        console.log(item)
        ind = item
        return <Page key={key} style={props} />
      })}
     <a onClick={() => {console.log(`pushed ${slides.get(ind)}`)}}>Enter</a>
    </div>
  )
  */
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

