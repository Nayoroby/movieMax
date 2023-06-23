import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../reset.css'
import './filmInfo.scss'
import { useState } from 'react';
import axios from 'axios';
import { addFavCard, deleteFavCard } from '../../apiSrc';

const FilmInfo = () => {

    const [open, setOpen] = useState(false)
    const [favCards, setFavCards] = useState([])
    const [titles, setTitles] = useState([])

    useEffect(()=>{
        axios.get('https://648cbbd78620b8bae7ed509c.mockapi.io/favCards')
        .then((resp)=> setFavCards(resp.data))
    }, [])

    useEffect(()=>{
        favCards.forEach((item)=>{
            setTitles((prev) => [...prev, item.filmId])
        })
    }, [favCards]) 

    function checkingBtn(filmId) {
        let post = false
        for (let i = 0; i < titles.length; i++) {
            if (titles[i] === filmId) {
                post = true
            }
        }
        return post
    }

    const resp = JSON.parse(localStorage.getItem('cardInfo')) 

    return (
        <div className='filmInfo'>
            <Header open={open} setOpen={setOpen}/>
            <main className='main'>
                <div className="main__container">
                    <div className="main__content">
                        <div className="high__block">
                            <img src={resp.posterUrl} className='main__img' alt="" />
                            <div className="high-block__content">
                                <div className="high-block__header">
                                    <h1 className="high-block__title">{resp.nameRu}</h1>
                                    <p className="high-block__raiting"><p className='raiting__text'>{resp.ratingImdb} / 10</p> <img src="public/star.svg" className='star__img' alt="" /></p>
                                </div>
                                <h3 className="high-block__subtitle">{resp.nameOriginal}</h3>
                                <button className={
                                    !checkingBtn(resp.kinopoiskId)? 'high-block__btn' : 'high-block__btn active-btn'
                                } onClick={!checkingBtn(resp.kinopoiskId)? ()=> addFavCard(
                                    {    
                                        filmId: resp.kinopoiskId,
                                        posterUrl: resp.posterUrl,
                                        nameRu: resp.nameRu,
                                        nameOriginal: resp.nameOriginal,
                                        year: resp.year
                                    }, titles, setTitles
                                    ) : ()=> deleteFavCard(resp.kinopoiskId, {titles, setTitles})}>
                                        <p className='high-block-btn__text'>{!checkingBtn(resp.kinopoiskId)? 'в закладки' : 'добавленно'}</p>
                                        <img src={!checkingBtn(resp.kinopoiskId)? 'public/fav.svg' : 'public/check.svg'}  className='fav__img' alt="" />
                                        </button>
                                <div className="about">
                                    <h4 className="about__title">О фильме:</h4>
                                    <p className="year">год производства: {resp.year}</p>
                                    <p className="country">страна: {resp.countries[0].country}</p>
                                    <p className="gener">жанр:{resp.genres.map((genres)=> ' ' + genres.genre)}</p>
                                    <p className="no-to">нельзя смотреть до: {resp.ratingAgeLimits !== null? resp.ratingAgeLimits.replace('age', '') + ' лет' : '0'}</p>
                                    <p className="slogan">слоган:{resp.slogan}</p>
                                    <p className="raiting">рейтинг MPAA:{resp.ratingMpaa}</p>
                                </div>
                            </div>
                        </div>
                        <p className="description">краткое описание: {resp.description}</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default FilmInfo;