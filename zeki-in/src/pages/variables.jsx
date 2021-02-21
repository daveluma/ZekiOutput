import React from "react";
import '../variables.css';
import '../styles.css'
import wk1 from './worksheets/Loops1.pdf'
import wk2 from './worksheets/Loops2.pdf'
import wk3 from './worksheets/Loops3.pdf'

const VariablePage = () => {

    function handleClick(item) {
        console.log(item); // it will be log 1 item when you click
        window.history.back()
      }

    return (
        <div className="flexbox-container">
            {
                <style>{'body { background-color: #f4ed1d; }'}</style>
            }
            <a className="concept-font" target='_blank'>Variables</a>
            <div className="flexbox-container">
            <a href={wk1} className="flexbox-item-1" className="b1" target='_blank' /*download="loop1"*/>WorkSheet #1</a>
            <a href={wk2} className="flexbox-item-1" className="b2" target='_blank'>WorkSheet #2</a>
            <a href={wk3} className="flexbox-item-1" className="b3" target='_blank'>WorkSheet #3</a>
            <a href={wk3} className="flexbox-item-1" className="b4" target='_blank'>Try out variables with Zeki-Output!</a>
            <button className="back" onClick={(e)=>handleClick(e)}>Back</button>
            </div>
            
        </div>
    )
}

export default VariablePage;