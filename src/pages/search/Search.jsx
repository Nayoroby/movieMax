import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../reset.css'
import '../search/search.scss'
import { useState } from 'react';
import axios from 'axios';
import ModalItem from '../../components/modalItem/modalItem';
import { searchMovie } from '../../apiSrc';

const Search = () => {

    const [open, setOpen] = useState(false)
    const [inputInfo, setInputInfo] = useState({films:[]})

    return (
        <div className='search'>
            <Header open={open} setOpen={setOpen}/>
            <main className='main'>
                <div className="main__container">
                    <h1 className="search__title">Searching</h1>
                    <p className="search__text">There is you can find movie you want and know about it all information!</p>
                    <form className="search__form">
                        <input type="text" onChange={(event)=> searchMovie(event.target.value, setInputInfo)} className="search__input"/>
                        <button className="search__btn">find</button>
                    </form>
                    <div className="input-modal">
                        {inputInfo.films.map((film)=>{
                            return <ModalItem obj={film} key={film.filmId}/>
                        })}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Search;