import React from 'react';
// import {Container, IconButton, Toolbar, Typography} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import s from '../NavBar/nav.module.css';
import logo from '../../images/logo-lamoda.png'
import Login from '../../LoginBtn/login';
import Logout from '../../LoginBtn/logout';
import Profile from '../../LoginBtn/Profile';
import {useAuth0} from '@auth0/auth0-react';

import {AppBar, Toolbar, IconButton, Badge, MenuIcon, Menu, Typography} from '@material-ui/core';

import {ShoppingCart} from '@material-ui/icons';

import useStyles from './styles';


const Nav = ({totalItems}) => {
    const {user,isAuthenticated} = useAuth0();
    const classes = useStyles()
    return (
        <nav className={s.menu}>
            <div className={s.logo}>
                <h2>LaModa</h2>
            </div>
            {isAuthenticated && (
                <div className={s.email}>
                    {user.email}
                </div>
            )}
            <div className={s.item}>
            <Login/>
            </div>
            <div className={s.item}>
                <Logout/>
            </div>
            <div className={s.menus}>
            <div className={s.item}>
            <NavLink to="/home" activeClassName={s.activeLink} className={s.items} >Home</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/about" activeClassName={s.activeLink} className={s.items}>About</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/catalog" activeClassName={s.activeLink} className={s.items}>Catalog</NavLink>
            </div>
            
            <div className={s.item}>
            <NavLink to="/contacts" activeClassName={s.activeLink} className={s.items}>Contacts</NavLink>
            </div>
            <NavLink to="/basket">
            <div className={s.shopping}>
            <div className={classes.button}>
                <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>
            </div>
            </NavLink>
            </div>
        
        </nav>
    )
}

export default Nav;
