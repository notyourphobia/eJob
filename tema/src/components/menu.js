import React from "react";
import logo from '../logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import {Link} from 'react-router-dom';

const Menu = () =>
    <Col className='react-menu'>
        <Row>
            <Col className='logo-container'>
                <img src={logo} className="logo" alt="logo" />
            </Col>
        </Row>

        <Row >
            <Col>
                <Link to='/'>
                    <Button variant='info' className='myButtons'>
                        Home
                </Button>
                </Link>
                <Link to='/exe1'>
                    <Button variant='info' className='myButtons' >
                        Exe1
                </Button>
                </Link>
                <Link to='/exe2'>
                    <Button variant='info' className='myButtons'>
                        Exe2
                </Button>
                </Link>
                <Link to='/exe3'>
                    <Button variant='info' className='myButtons'>
                        Exe3
                </Button>
                </Link>
            </Col>
        </Row>
    </Col>

export default Menu;