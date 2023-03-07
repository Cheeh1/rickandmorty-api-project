import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from "./components/Header"

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        // console.log(res)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      < Header />
      <div>
    {characters.map(character => (
      <div key={character.id}>
        <h2>{character.name}</h2>
        <p>{character.status}</p>
        <img src={character.image} alt="" />
      </div>
    ))}
  </div>


    </>
  )
}

export default App
