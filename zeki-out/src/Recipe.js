import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image}) => {
    return(
        <div class={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;