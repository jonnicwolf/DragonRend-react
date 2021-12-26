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
        width: 300px;
    `
    return (
        <nav>
            <ul>
                <Button><li>
                    <Link to='/newGameMenu'>
                        New Game        
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='/checkpointsMenu'>
                        Checkpoints
                    </Link>
                </li></Button>
                
                <Button><li>
                    <Link to='/careersMenu'>
                        Career
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='settingsMenu'>
                        Settings
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='/bugs'>
                        Report a Bug
                    </Link>
                </li></Button>

            </ul>
        </nav>
    )
};

export default MainMenu;
