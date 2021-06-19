import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const  cl = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={cl.media}/> 
            <CardContent className={cl.cardContent}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={cl.cardActions}>
                <div className={cl.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button vatiant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
