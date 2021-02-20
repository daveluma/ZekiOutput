import React from "react";

const LoopPage = () => {
    return (
        <div className="flexbox-container">
            {
                <style>{'body { background-color: #eb5ea2; }'}</style>
            }
            <div className="flexbox-container">
            <h3 className="flexbox-item">WorkSheet #1</h3>
            <h3 className="flexbox-item">WorkSheet #2</h3>
            <h3 className="flexbox-item">WorkSheet #3</h3>
            </div>
        </div>
    )
}

export default LoopPage;