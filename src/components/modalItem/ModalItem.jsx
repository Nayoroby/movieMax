import React from 'react';
import '../../pages/search/search.scss'
import axios from 'axios';
import { getCurrMovie } from '../../apiSrc';

const ModalItem = ({obj}) => {
    
    return (
        <div className="input-modal__item" onClick={()=> getCurrMovie(obj.filmId)}>
            <div className="input-modal__content">
                <img src={obj.posterUrl} alt="" className="input-modal__img" />
                <div className="input-modal__info">
                    <h3 className="input-modal__title">{obj.nameEn}</h3>
                    <p className="input-modal__text">{obj.nameRu}, {obj.year}</p>
                </div>
            </div>
        </div>
    );
};

export default ModalItem;