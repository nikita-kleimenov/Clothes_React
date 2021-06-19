import React from 'react'
import s from './jackets.module.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const Jackets = ({products, onAddToCart}) => {
    const cl = useStyles()
    return (
    

    <main className={cl.content}>
        <div className={s.grids}>
        <Grid container justify="center" spacing={3} justify="space-around">
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/> 
                </Grid>
            ))}
        </Grid>
        </div>
    </main>
    )
}

export default Jackets
