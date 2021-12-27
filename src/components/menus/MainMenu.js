import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MainMenu = () => {
    const Button = styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style-type: none;
        border: 0.5vh solid;
        border-radius: 25px;
        border-color: brown;
        font-size: 50px;
        width: 300p;
        margin-bottom: 30px;
    `
    return (
        <nav>
            <ul>
                <Button><li>
                    <Link to='/newGameMenu'
                          style={{textDecoration: 'none'}}>
                        New Game        
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='/checkpointsMenu'
                          style={{textDecoration: 'none'}}>
                        Checkpoints
                    </Link>
                </li></Button>
                
                <Button><li>
                    <Link to='/careersMenu'
                          style={{textDecoration: 'none'}}>
                        Career
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='settingsMenu'
                          style={{textDecoration: 'none'}}>
                        Settings
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='/bugs'
                          style={{textDecoration: 'none'}}>
                        Report a Bug
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='/about'
                          style={{textDecoration: 'none'}}>
                        Devs
                    </Link>
                </li></Button>
            </ul>
        </nav>
    )
};

export default MainMenu;
