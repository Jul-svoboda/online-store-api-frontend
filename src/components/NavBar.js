import React, { useContext }from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from "react-bootstrap"
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Home Staff</NavLink>
                {user.isAuth ? 
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button 
                            onClick={() => navigate(ADMIN_ROUTE)} 
                            variant='outline-light'
                        >
                            Admin
                        </Button>
                        <Button 
                            onClick={() => navigate(LOGIN_ROUTE)} 
                            variant='outline-light' 
                            className="ms-2"
                        >
                            Log out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>}
            </Container>
      </Navbar>
    )
});

export default NavBar