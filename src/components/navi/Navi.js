import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,

} from 'reactstrap';
import {Link} from "react-router-dom";
import CartSummary from '../cart/CartSummary';


export default class Navi extends React.Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen : false
        };
    }
    toggle(){
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
    render()
    {
        return (
            <div>
                <Navbar color='dark' fixed='top'   dark expand='md'>
                    <NavbarBrand href="/">ReduxReact.Js</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='me-auto top' navbar>
                                <NavItem>
                                    <NavLink>
                                       <Link className='text-decoration-none ' style={{color: 'white'}} to="/">Add Product</Link>
                                    </NavLink>
                                </NavItem>
                                <CartSummary />
                            </Nav>
                        </Collapse>
                    </Navbar>
            </div>
        );
    }
}