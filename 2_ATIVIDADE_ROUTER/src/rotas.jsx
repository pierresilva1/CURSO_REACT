import { Routes, Route } from 'react-router-dom'
import { Marcio } from './pages/Marcio'
import { Nana } from './pages/Nana'
import { Nagao } from './pages/Negao'


export function Rotas() {
    return(
        <Routes>
            <Route path="/" element={ <Marcio/> } />
            <Route path="/nana" element={ <Nana/> } />
            <Route path="/negao" element={ <Nagao/> } />
        </Routes>
    )
}