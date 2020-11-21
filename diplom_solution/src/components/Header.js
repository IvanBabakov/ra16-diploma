import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {BrowserRouter as Router, NavLink, Redirect} from 'react-router-dom';
import logo from '../img/header-logo.png';
import PropTypes from 'prop-types'
import { setRedirectSearch, setSearchText } from '../actions/actionCreators';

function Header(props) {
    const {textSearch} = useSelector(state => state.catalog);

    const dispatch = useDispatch();

    const handlerSearchVisible = () => {
        const searchForm = document.querySelector('[data-id="search-form"]');
        const allClass = searchForm.getAttribute('class').split(' ');
        const invisible = allClass.filter(el => el === 'invisible');
        if(invisible.length > 0) { 
            searchForm.setAttribute('class', 'header-controls-search-form form-inline');
        } else {
            if(textSearch.text.length > 0) {
                dispatch(setRedirectSearch(true))
                searchForm.setAttribute('class', 'header-controls-search-form form-inline invisible');
                const input = document.querySelector('[placeholder="Поиск"]');
                input.value = '';
            } else {
                searchForm.setAttribute('class', 'header-controls-search-form form-inline invisible');
            }
        }

    }

    const handlerInputChange = (event) => {
        dispatch(setSearchText(event.target.value))
    }

    return (
        <header className="container">
            {textSearch.redirect ? <Redirect to='/catalog'/> : null}
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Bosa Noga" />
                    </a>

                    <div className="collapase navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink exact className="nav-link" to="/">Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/catalog">Каталог</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/about">О магазине</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/contacts">Контакты</NavLink>
                            </li>
                        </ul>
                        <div>
                            <div className="header-controls-pics">
                                <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handlerSearchVisible}></div>
                                {/* Do programmatic navigation on click to /cart.html */}
                                <div className="header-controls-pic header-controls-cart">
                                    <div className="header-controls-cart-full">1</div>
                                    <div className="header-controls-cart-menu"></div>
                                </div>
                            </div>
                            <form data-id="search-form" className='header-controls-search-form form-inline invisible'>
                                <input className="form-control" placeholder="Поиск" onChange={handlerInputChange}/>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
      </header>
    )
}

Header.propTypes = {

}

export default Header

