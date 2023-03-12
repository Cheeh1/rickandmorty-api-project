import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import info from '../assets/info-circle.svg'

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
            <div>
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
                                <Link className='character-name-link' to={`/characters/${character.id}`}>
                                    <h2 className='character-name'>{character.name}</h2>
                                </Link>
                                <h3 className='character-status'>{`${character.status} - ${character.species}`}</h3>
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
                        <Link to={`/characters/${character.id}`}>
                            <img className='info-logo' src={info} alt='info-logo' />
                        </Link>
                    </div>
                ))}
            </section>
        </>
    )
}
export default CharacterList