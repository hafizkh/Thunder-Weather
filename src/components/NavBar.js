import React, { useState } from 'react'
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import weather_logo from "../images/weather_logo.JPG"


const NavBar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const navigate = useNavigate()

    const logIn = () => {
        setisLoggedIn(true);
        toast.success("Logged In Successfully",{autoClose: 3000,})
        navigate("/weather");
    }
    const logOut = () => {
        setisLoggedIn(false);
        toast.success("Logged out Successfully",{autoClose: 3000,})
        navigate('/home')
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Collapse>
                    <Navbar.Brand as= {Link} to='/'>
                    <img  className="img-responsive" src={weather_logo} alt="Weather logo" />
                    </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/weather">Weather</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        {!isLoggedIn ? <form style={{marginRight: '6rem'}} className="d-flex">
                            <button className="btn btn-primary" onClick={logIn}> Login </button>
                            <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
                        </form> : <button style={{marginRight: '6rem'}} className="btn btn-primary" onClick={logOut}> Logout </button>}
                    </Navbar.Collapse>
            </Navbar>
            <ToastContainer/>
        </div>
    )
}

export default NavBar