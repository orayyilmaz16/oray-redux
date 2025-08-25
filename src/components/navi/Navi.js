import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,

 
} from 'reactstrap';

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
                            </Nav>
                        </Collapse>
                    </Navbar>
            </div>
        );
    }
}