import React from "react";
import '../variables.css';

const UsersPage = () => {
    return (
        <div className="flexbox-container">
            <h1 className='top-left'>back</h1>
            {
                <style>{'body { background-color: #f4ed1d; }'}</style>
            }
            <div className="flexbox-container">
            <h3 className="flexbox-item">WorkSheet #1</h3>
            <h3 className="flexbox-item">WorkSheet #2</h3>
            <h3 className="flexbox-item">WorkSheet #3</h3>
            </div>
        </div>
    )
}

export default UsersPage;