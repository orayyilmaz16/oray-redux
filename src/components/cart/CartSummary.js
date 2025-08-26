import React, { Component } from "react";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartAction from "../../redux/actions/cartAction";
import alertify from "alertifyjs";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink href="/">Empty Card</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle new caret>
          Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() =>
                  this.props.actions.removeFromCart(cartItem.product)}>Delete</Badge> <t />                  
                   {cartItem.product.productName} <t></t>
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
            
          ))}
          

          <DropdownItem divider />
          <DropdownItem>Go to cart</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartAction.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
