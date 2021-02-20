import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { useHistory } from 'react-router-dom';
import '../styles.css'

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
    [3,  "first-program"],
    [4,  "toys"]
  ]);
  
  //keeps track of which slide the page is currently on. i.e. 0 means currently on Variable slide
  var ind = 0;

  const MainPage = () => {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = slides.get(ind); 
    history.push(path);
  }

    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 5), [])
    const transitions = useTransition(index, p => p, {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    return (
        <div className="simple-trans-main" onClick={onClick}>
          
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            console.log(item)
            ind = item
            return <Page key={key} style={props} />
          })}
         <b className="b1" onClick={routeChange}>Enter</b>
        </div>
      )
}

export default MainPage;