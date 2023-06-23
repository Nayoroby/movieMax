import React from 'react';
import axios from 'axios';

const FavCard = ({obj}) => {

    async function getCurrMovie(id) {
        const options = {
            method: 'GET',
            url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '57515040-b5cd-4a52-9c97-59d2ca96eff6', 
            },
        }
        const response = await axios.request(options)
        localStorage.setItem('cardInfo', JSON.stringify(response.data))
        // console.log(response.data);
        window.location.href = 'http://localhost:5173/filmInfo';
    }

    return (
        <a className='fav__card' onClick={()=>getCurrMovie(obj.filmId)}>
            <div className="fav-card__content">
                <img src={obj.posterUrl} alt="" className="fav-card__img" />
                <div className="fav-card__info">
                    <h3 className="fav-card__title">{obj.nameRu}</h3>
                    <p className="fav-card__text">{obj.nameOriginal}, {obj.year}</p>
                </div>
            </div>
        </a>
    );
};

export default FavCard;