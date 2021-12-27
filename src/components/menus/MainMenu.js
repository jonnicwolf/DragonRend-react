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
        
            <ul>
REPWarning: validateDOMNesting(...): <li> cannot appear as a descendant of <li>.
                <Button><li>
                    <Link to='/newGame'
                          style={{textDecoration: 'none'}}>
                        New Game        
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='/checkpoints'
                          style={{textDecoration: 'none'}}>
                        Checkpoints
                    </Link>
                </li></Button>
                
                <Button><li>
                    <Link to='/careers'
                          style={{textDecoration: 'none'}}>
                        Career
                    </Link>
                </li></Button>

                <Button><li>
                    <Link to='settings'
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
        
    )
};

export default MainMenu;
