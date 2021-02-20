import React from "react";
import '../styles.css'
import '../variables.css';
import wk1 from './worksheets/Loops1.pdf'
import wk2 from './worksheets/Loops2.pdf'
import wk3 from './worksheets/Loops3.pdf'

const FirstProgPage = () => {
    return (
        <div className="flexbox-container">
            {
                <style>{'body { background-color: #29ade3; }'}</style>
            }
            <div className="flexbox-container">
            <a href={wk1} className="flexbox-item-1" className="b3" target='_blank' /*download="loop1"*/>WorkSheet #1</a>
            <a href={wk2} className="flexbox-item-1" className="b2" target='_blank'>WorkSheet #2</a>
            <a href={wk3} className="flexbox-item-1" className="b1" target='_blank'>WorkSheet #3</a>
            <div className="flexbox-container" className="rectangle">
                <p>ZekiOutput</p>
            </div>
            </div>
            
        </div>
    )
}

export default FirstProgPage;