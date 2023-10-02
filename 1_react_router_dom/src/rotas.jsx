import { Routes, Route } from 'react-router-dom'
import { Glaucio } from './pages/Glaucio'
import { Home } from './pages/Home'

export function Rotas() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/glaucio" element={ <Glaucio/> } />

        </Routes>
    )
}