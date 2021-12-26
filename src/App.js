import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
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

/*
..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
.##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
.##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
.##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
.##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
.##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
*/
import DragonRendBanner from './components/DragonRendBanner';

const App = () => {
    return(
        <>
            <Link to='/'>
                <DragonRendBanner />
            </Link> 
            <Routes>
                <Route path='/' element={<DragonRend/>}/>
                <Route path='/bugs' element={<BugsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </>
    )
};

export default App;
