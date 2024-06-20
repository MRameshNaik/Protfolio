import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from "../../assets/logo_ram.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
const [menu, setMenu] = useState("home");
const menuRef = useRef();


const openMenu = () => {
    menuRef.current.style.right = "0";
}

const closeMenu = () => {
    menuRef.current.style.right = "-350px";
}

return (
    <div className='navbar'>
        <div className="title">
            <img src={logo} alt="Logo" />
            <span><p>Ramesh</p></span>
        </div>
        
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />

            <li>
                <AnchorLink className='anchor-link' href='#home'>
                    <p onClick={() => setMenu("home")}>Home</p>
                </AnchorLink>
                {menu === "home"}
            </li>
            <li>
                <AnchorLink className='anchor-link' offset={50} href='#about'>
                    <p onClick={() => setMenu("about")}>About Me</p>
                </AnchorLink>
                {menu === "about"}
            </li>
            <li>
                <AnchorLink className='anchor-link' offset={50} href='#skills'>
                    <p onClick={() => setMenu("skills")}>Skills</p>
                </AnchorLink>
                {menu === "skills"}
            </li>
            <li>
                <AnchorLink className='anchor-link' offset={50} href='#work'>
                    <p onClick={() => setMenu("work")}>Projects</p>
                </AnchorLink>
                {menu === "work"}
            </li>
            <li>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    <p onClick={() => setMenu("contact")}>Contact</p>
                </AnchorLink>
                {menu === "contact"}
            </li>
        </ul>
        <div className="nav-connet">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <p onClick={() => setMenu("contact")}>Connect With Me</p>
            </AnchorLink>
        </div>
    </div>
);
}

export default Navbar;