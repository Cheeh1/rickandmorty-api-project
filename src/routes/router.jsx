import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharacterList from '../components/CharacterList'
import CharacterDetails from '../components/CharacterDetails'
import Header from '../components/Header'

const RouterLink = () => {
    return (
        <>
        <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<CharacterList />} />
                    <Route path='/characters/:id' element={<CharacterDetails />} />
                </Routes>
            </Router>

        </>
    )
}
export default RouterLink