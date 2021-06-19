import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgJacket from '../../../images/Black-Leather-Jacket-PNG-Pic.png';
import imgJeans from '../../../images/jeans.png';
import imgT from '../../../images/t-shirt.png';
import imgShoes from '../../../images/shoes.png';
import imgCoats from '../../../images/coat.png';



import s from './icons.module.css'
import { NavLink } from 'react-router-dom';


export default function ImgMediaCard() {

  return (
    <div className={s.iconWrapper}>
        <div className={s.name}>
        <h2>Choose the category</h2>
        </div>
        <div className={s.allCards}>
            <NavLink to="/jackets">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/111971_0.jpeg"/>
                <h3>Jackets</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
           
            <NavLink to="/jeans">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/119724_0.jpeg"/>
                <h3>Jeans</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/shirts">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/117618_0.jpeg"/>
                <h3>T-shirts</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/shoes">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://b2buacdn.aza.moda/pdp-gallery-lg/31/00/00/11/11/3100001111228/10.jpg"/>
                <h3>Shoes</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/coats">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://i.pinimg.com/originals/76/c0/5e/76c05eb606ddd2d0f142181348fe7584.png"/>
                <h3>Coats</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/coats">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/114387_0.jpeg"/>
                <h3>Eco-skin</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/coats">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/121415_0.jpeg"/>
                <h3>Blazer</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/coats">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/117650_0.jpeg"/>
                <h3>Sweatshirt</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/coats">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/117543_0.jpeg"/>
                <h3>Vest</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/coats">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/118177_0.jpeg"/>
                <h3>Dress</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            <NavLink to="/coats">
            <div className={s.card}>
            <div className={s.image}>
                <img src="https://img-colinsua.mncdn.com/mnresize/400/-/Assets/Ukraine/Originals/118521_0.jpeg"/>
                <h3>Kardigans</h3>
            </div>
            <div className={s.content}>
                {/* <button>BUY</button> */}
            </div>
        </div>
            </NavLink>
            
        </div>
        
    </div>
  );
}
