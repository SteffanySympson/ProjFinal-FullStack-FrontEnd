import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/img.png';
import './header.css';

const Header = () => {
    return(
        <>
            <div className='tudo-header'>
                <nav>
                    <img className='imgowl' src={ img }/>
                    <Link to='/' >
                        Início
                    </Link>
                    <Link to='/add' >
                        Cadastro
                    </Link>
                </nav>
            </div>
        </>
    )
}
export default Header;