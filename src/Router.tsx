import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Search from './pages/Search';

export default function Router(){
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail' element={<Detail />}/>
            <Route path='/search' element={<Search />}/>
        </Routes>
    );
}