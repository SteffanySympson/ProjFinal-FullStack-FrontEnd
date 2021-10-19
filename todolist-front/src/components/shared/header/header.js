import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <>
            <div className='tudo-header'>
                <nav>
                    {/* <img src='./header/img.png'/> */}
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