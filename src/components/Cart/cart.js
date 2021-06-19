import React from 'react';
import { Container, Typography, Button, Grid} from '@material-ui/core';
import useStyle from './style';
import CartItem from './CartItem/CartItem';
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    const cl = useStyle();
    const EmptyCart = () => (
            <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    )

    const  FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                   <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div className={cl.cartDetails}>
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={cl.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <NavLink to="/checkout">
                <Button className={cl.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </NavLink>
            </div>
        </div>
        </>
    );
    if(!cart.line_items) return 'Loading...'
    
    return (
        <Container className={cl.contain}>
            <div className={cl.toolbar}/>
            <Typography className={cl.title} variant="h4">Your shopping cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </Container>
    
    )
}

export default Cart
