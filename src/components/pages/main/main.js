import React from 'react';
import {Button, Container, IconButton, Toolbar, Typography} from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link, NavLink } from 'react-router-dom';
import s from './main.module.css'
import Nav from '../NavBar/Nav';


const Get = () => {
    window.open('C:\Users\taras\OneDrive\Desktop\shopIPZ\lamoda\src\components\pages\Basket\basket.js');
}

const Main = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.info}>
                    <div className={s.infoText}>
                        {/* Our shop is beautiful place for shopping and entertaiment  */}
                        New Collection
                        <h4>Winter</h4>
                        <h4 className={s.point2}>Moda</h4>
                        <h4 className={s.point3}>Autumn</h4>
                        <h4 className={s.point4}>Womans</h4>
                    </div>
                    <div className={s.btn}>
                        <NavLink to="/catalog" className={s.button} style={{display:"inline-block"}}>Get Start</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
