import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropBtn}></button>
            <div className={s.dropdownContent}>
                <NavLink to="/pre-junior" activeClassName={s.active}>Pre Junior</NavLink>
                <NavLink to="/junior" activeClassName={s.active}>Junior</NavLink>
                <NavLink to="/junior-plus" activeClassName={s.active}>Junior Plus</NavLink>
            </div>
        </div>

    )
}

export default Header
