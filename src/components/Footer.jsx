import React from "react";
import netlify from "../assets/netlifylogo.png"
import stellate from "../assets/stellatelogo.png"
import twitter from "../assets/twitter.svg"
import github from "../assets/github.svg"
import heart from "../assets/heart-fill.svg"
import code from "../assets/code.svg"

const Footer = () => {
    return (
        <>
            <footer className="ftr-bg">
                <div className="ftr-1">
                    <div className="ftr-2">
                        <a href="https://rickandmortyapi.com/api/character" target="_blank" className="ftr-text">CHARACTERS: 826</a>
                        <a href="https://rickandmortyapi.com/api/location" target="_blank" className="ftr-text">LOCATION: 126</a>
                        <a href="https://rickandmortyapi.com/api/episode" target="_blank" className="ftr-text">EPISODES: 51</a>
                    </div>
                    <div className="server-status">
                        <a className="ftr-text" href="https://status.rickandmortyapi.com/" target="_blank">SERVER STATUS</a>
                        <p className="server-light"></p>
                    </div>
                </div>

                <div className="ftr-3">
                    <a href="https://www.netlify.com/" target="_blank"><img className="ftr-img" src={netlify} alt="netlify-logo" /></a>
                    <a href="https://stellate.co/?ref=powered-by" target="_blank"><img className="ftr-img" src={stellate} alt="stellate-logo" /></a>
                </div>

                <div className="ftr-4">
                    <a className="ftr-4-img" href="https://github.com/afuh/rick-and-morty-api" target="_blank"><img src={github} alt="github-logo" /></a>
                    <a className="ftr-4-img" href="https://rickandmortyapi.com/support-us" target="_blank"><img src={heart} alt="heart-icon" /></a>
                    <a className="twitter" href="https://twitter.com/rickandmortyapi" target="_blank"><img className="twitter" src={twitter} alt="twitter-logo" /></a>
                </div>

                <div className="ftr-5">
                    <img className="ftr-icon" src={code} alt="code-icon" /> 
                    <p>by <a className="founder" href="https://github.com/afuh">Axel Fuhrmann</a> 2023</p>
                </div>
            </footer>
        </>
    )
}
export default Footer