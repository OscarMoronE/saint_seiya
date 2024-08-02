import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navBar'>
            <button className='menuButton' onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <div className={`menuLinks ${isOpen ? 'open' : ''}`}>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/aries'}>Aries</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/tauro'}>Tauro</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/cancer'}>Cancer</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/geminis'}>Geminis</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/leo'}>Leo</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/virgo'}>Virgo</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/libra'}>Libra</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/escorpion'}>Escorpion</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/sagitario'}>Sagitario</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/capricornio'}>Capricornio</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/aquario'}>Aquario</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activo" : null} to={'caballero/piscis'}>Piscis</NavLink>
            </div>
        </nav>
    );
};

export default Nav;
