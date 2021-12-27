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
import NewGamePage from './pages/NewGamePage';
import CheckpointsPage from './pages/CheckpointsPage';
import SettingsPage from './pages/SettingsPage';
// import CareerPage from './pages/CareerPage;'

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
                <Route path='/newGame' element={<NewGamePage/>}/>
                <Route path='/checkpoints' element={<CheckpointsPage/>}/>
                <Route path='/settings' element={<SettingsPage/>}/>
                {/* <Route path='/career' element={<CareerPage/>}/> */}

            </Routes>
        </>
    )
};

export default App;
