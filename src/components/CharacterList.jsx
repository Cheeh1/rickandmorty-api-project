import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import info from '../assets/info-circle.svg'
import Header from './Header';
import Footer from './Footer';

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
            .then(res => {
                console.log(res)
                setCharacters(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [searchTerm])

    return (
        <>
        < Header />
            <div className='search-push'>
                <input className='character-search' type="text" placeholder='Search Character' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <section className='container'>
                {characters.map(character => (
                    <div className='character' key={character.id}>
                        <div>
                            <img className='character-image' src={character.image} alt={character.image} />
                        </div>
                        <div className='character-info'>
                            <div className='details-block'>
                                <Link className='character-name-link' to={`/character/${character.id}`}>
                                    <h2 className='character-name'>{character.name}</h2>
                                </Link>
                                <div className='character-status-section'>
                                    <p className={character.status === "Alive" ? "alives" :  character.status === "Dead" ? "deads" : "unknowns"}></p> {/*extension of ternary operator when using three conditions */}
                                    <h3 className='character-status'>{`${character.status} - ${character.species}`}</h3>
                                </div>
                            </div>
                            <div className='details-block'>
                                <p className='character-location-title'>Last known location:</p>
                                <p className='character-location-details'>Earth (Replacement Dimension)</p>
                            </div>
                            <div className='details-block'>
                                <p className='character-sight'>First seen in:</p>
                                <p className='character-first-location'>{character.location.name}</p>
                            </div>
                        </div>
                        <Link to={`/character/${character.id}`}>
                            <img className='info-logo' src={info} alt='info-logo' />
                        </Link>
                    </div>
                ))}
            </section>
            < Footer />
        </>
    )
}
export default CharacterList