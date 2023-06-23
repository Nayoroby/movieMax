import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../reset.css'
import "./home.scss";
import Card from '../../components/card/Card';
import axios from 'axios'
import { getTopMovie, getCurrMovie } from '../../apiSrc'

const Home = () => {

    const [cardsInfo, setCardsInfo] = useState({films:[]})
    const [cardInfo, setCardInfo] = useState({})
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        getTopMovie(setCardsInfo)
    }, [])
    
    return (
        <div className={open? 'wrapper active' : 'wrapper'}>
            <div className={open? 'home active' : 'home'}>
                <Header open={open} setOpen={setOpen}/>
                <main className="main">
                    <div className="main__container">
                        <div className="information">
                            <h2 className="main__title">Welcome to movieMax!</h2>
                            <p className="main__text">movieMax - this is the best movie catalog, where you may find all information about movies.</p>
                        </div>
                        <div className="recommend">
                            <h2 className="recommend__title">We recommend you:</h2>
                            <div className="recommend__cards">
                            {
                                cardsInfo.films.map(obj => {
                                    return <Card key={obj.filmId} obj={obj} getCurrMovie={getCurrMovie}/>
                                })
                            }
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default Home