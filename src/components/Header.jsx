import React from "react";
import logo from "../assets/rickandmortylogo.png"
import heart from "../assets/heart-fill.svg"

const Header = () => {
    return (
        <>
        <section className="header-bg">
        <nav className="nav-bg">
            <a href="https://rickandmortyapi.com/" target="_blank"><img className="nav-img" src={logo} alt="logo-img" /></a>
            <ul>
                <a href="https://rickandmortyapi.com/documentation" target="_blank" className="nav-list">Docs</a>
                <a href="https://rickandmortyapi.com/about" target="_blank" className="nav-list">About</a>
                <a href="https://rickandmortyapi.com/support-us" target="_blank" className="nav-list-1">SUPPORT US</a>
                <a href="https://rickandmortyapi.com/support-us" target="_blank" className="support"><img src={heart} alt="heart-icon" /></a>
            </ul>
        </nav>

        <hr className="header-line"/>

        <section>
            <h1 className="header-text">The Rick and Morty API</h1>
        </section>
        </section>
        </>
    )
}
export default Header