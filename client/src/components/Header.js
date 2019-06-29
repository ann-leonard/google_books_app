import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Search from './Search'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="bg-dark text-light">
                    <img
                        src="http://www.freepngclipart.com/download/reading/54348-stacked-color-together-cartoon-watercolor-book-books.png"
                        className="d-inline-block align-top"
                        width="100"
                        height="100"
                        alt="logo"
                    >
                    </img>
                    
                    <h1>BookLooker</h1>
                </Navbar>
                <Search />
            </div>
        );
    }
}

export default Header;