import React from 'react';
import '../../reset.css'
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({open, setOpen}) => {
    return (
        <header className='header'>
            <div className="header__container">
                <div className="logo">
                    <img src="public/logo.svg" alt="" className="logo__img" />
                    <h1 className="logo__text">MOVIEMAX</h1>
                </div>
                <nav className={open? 'nav active' : 'nav'}>
                    <ul className="nav__list">
                        <li><Link to="/" className="nav__item">home</Link></li>
                        <li><Link to="/search" className="nav__item">search</Link></li>
                        <li><Link to="/favorites" className="nav__item">favorites</Link></li>
                    </ul>   
                </nav>
                <div className="right__btns">
                    <button className='regist__btn'>registration</button>
                    <button className={open? 'burger active' : 'burger'} onClick={open? ()=>setOpen(false) : ()=>setOpen(true)}>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;