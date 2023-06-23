import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../reset.css'
import '../favorites/favorites.scss'
import axios from 'axios';
import FavCard from '../../components/favCard/favCard';

const Favorites = () => {

    const [favCards, setFavCards] = useState([])

    useEffect(()=>{
        axios.get('https://648cbbd78620b8bae7ed509c.mockapi.io/favCards')
            .then((resp)=> setFavCards(resp.data))
    }, [])

    return (
        <div className='favorites'>
            <Header/>
            <main className='main'>
                <div className="main__container">
                    <h1 className="main__title">Films what you will see:</h1>
                    <div className="fav__cards">
                        {
                            favCards.map(favCard => {
                                return <FavCard key={favCard.filmId} obj={favCard}/>
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Favorites;