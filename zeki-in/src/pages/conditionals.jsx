import React from "react";

const ConditionalPage = () => {
    return (
        <div className="flexbox-container">
            {
                <style>{'body { background-color: #f6891f; }'}</style>
            }
            <div className="flexbox-container">
            <h3 className="flexbox-item">WorkSheet #1</h3>
            <h3 className="flexbox-item">WorkSheet #2</h3>
            <h3 className="flexbox-item">WorkSheet #3</h3>
            </div>
            
        </div>
    )
}

export default ConditionalPage;