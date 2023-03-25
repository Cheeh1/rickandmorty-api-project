import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharacterList from '../components/CharacterList'
import CharacterDetails from '../components/CharacterDetails'

const RouterLink = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<CharacterList />} />
                    <Route path='/character/:id' element={<CharacterDetails />} />
                </Routes>
            </Router>

        </>
    )
}
export default RouterLink