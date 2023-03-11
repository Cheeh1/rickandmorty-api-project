import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <section className='alignment'>
                <div className='details-container'>
                    <div>
                        <img className='details-img' src={character.image} alt={character.name} />
                    </div>
                    <div className='details-info'>
                        <h1 className='details-info-name'>{character.name}</h1>
                        <p className='details-info-other'>{`Status: ${character.status}`}</p>
                        <p className='details-info-other'>{`Species: ${character.species}`}</p>
                        <p className='details-info-other'>{`Gender: ${character.gender}`}</p>
                        <p className='details-info-other'>{`Location: ${character.loaction?.name}`}</p>
                        <p className='details-info-other'>{`Origin: ${character.origin?.name}`}</p>
                    </div>
                </div>

                <Link className='return-link' to="/">
                    Return to HomePage
                </Link>
            </section>
        </>
    )
}
export default CharacterDetails
