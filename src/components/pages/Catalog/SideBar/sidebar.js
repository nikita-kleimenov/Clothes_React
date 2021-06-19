import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './sidebar.module.css'

const sidebar = () => {
    return (
        <div className={s.sidebar}>
            <h2>LaModa</h2>
            <NavLink  to="/jackets" className={s.categories}  activeClassName={s.activeLink}>Jackets</NavLink>
            <NavLink  to="/jeans" className={s.categories}  activeClassName={s.activeLink} >Jeans</NavLink>
            <NavLink  to="/shirts" className={s.categories}  activeClassName={s.activeLink} >T-shirts</NavLink>
            <NavLink  to="/shoes" className={s.categories}  activeClassName={s.activeLink} >Shoes</NavLink>
            <NavLink  to="/coats" className={s.categories}  activeClassName={s.activeLink} to="">Coats</NavLink>
        </div>
    )
}

export default sidebar
