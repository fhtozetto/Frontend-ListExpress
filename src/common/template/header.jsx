/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>L</b>Ex</span>
            <span className='logo-lg'>
                <i className='fa fa-bolt'></i>
                <b> List</b> Express
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="true" className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)