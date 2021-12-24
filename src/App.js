import React from 'react';
import {Routes, Route} from 'react-router-dom';
/*
########.....###.....######...########..######.
##.....##...##.##...##....##..##.......##....##
##.....##..##...##..##........##.......##......
########..##.....##.##...####.######....######.
##........#########.##....##..##.............##
##........##.....##.##....##..##.......##....##
##........##.....##..######...########..######.
*/
import DragonRend from './pages/DragonRend';
import AboutPage from './pages/AboutPage';
import BugsPage from './pages/BugsPage';

const App = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<DragonRend/>}/>
                <Route path='/bugs' element={<BugsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </>
    )
};

export default App;
