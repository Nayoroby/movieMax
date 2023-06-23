import '../../reset.css'
import React from 'react';
import Skeleton from 'react-loading-skeleton'
import axios from 'axios';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import 'react-loading-skeleton/dist/skeleton.css'
import "../../pages/home/home.scss";

const Card = ({ obj, getCurrMovie }) => {

    return (
        <>
        <Link className='card'  onClick={()=> console.log(getCurrMovie(obj.filmId))}>
            <div className="card__content">
                <img src={obj.posterUrl} alt="" className="card__img" />
                <div className="card__info">
                    <h3 className="card__title">{obj.nameRu}</h3>
                    <p className="card__text">{obj.year}, {obj.filmLength}</p>
                </div>
            </div>
        </Link>
        </>
       
    )
};

export default Card;