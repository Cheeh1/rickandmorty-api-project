import { useState, useEffect } from 'react'
import axios from 'axios'
import "./styles/style.scss"

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <section className='container'>
        {characters.map(character => (
          <div className='character'>
            <div>
              <img className='character-image' src={character.image} alt="" />
            </div>
            <div className='character-info'>
              <div className='details-block'>
                <h2 className='character-name'>{character.name}</h2>
                <h3 className='character-status'>{character?.status} - <span>{characters[0]?.species}</span></h3>
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
          </div>
        ))}
      </section>
    </>
  )
}

export default App
