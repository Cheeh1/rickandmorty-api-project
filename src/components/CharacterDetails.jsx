import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import home from "../assets/house.svg"

const CharacterDetails = () => {
    const { id } = useParams()

    const { isLoading, error, data: character } = useQuery(
        ['character', id],
        () => axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.data)
    )

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

        // const [character, setCharacter] = useState({})

    // useEffect(() => {
        //     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        //         .then(res => setCharacter(res.data))
        //         .catch(err => console.log(err))
        // }, [id])

    return (
        <>
            <Link className='home-logo' to="/">
                <img src={home} alt='home-logo' />
            </Link>

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

        </>
    )
}
export default CharacterDetails
