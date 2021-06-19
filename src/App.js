import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/pages/main/main';
import About from './components/pages/about/about';
import Contacts from './components/pages/contacts/contacts';
import Nav from './components/pages/NavBar/Nav';
import Foot from './components/pages/footer/foot';
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from './components/pages/Catalog/catalog';
import Jackets from './components/pages/Catalog/Jackets/jackets';
import Jeans from './components/pages/Catalog/Jeans/jeans'
import Login from './components/LoginBtn/login';
import Logout from './components/LoginBtn/logout';
import Profile from './components/LoginBtn/Profile';
import {commerce} from './components/lib/commerce'
import { ContactSupportOutlined } from '@material-ui/icons';
import Cart from './components/Cart/cart';
import Checkout from './components/CheckoutForm/Checkout/Checkout';



function App() {

  const [products,setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async() => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const  fetchCart = async()=>{
    setCart(await commerce.cart.retrieve());
  }

  const  handleAddToCart = async(productId, quantity) =>{
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId,quantity)=>{
    const {cart} = await commerce.cart.update(productId,{quantity});

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) =>{
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart);
  }
  

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart);
  }
 
  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])


  console.log(cart)
  return (
     <BrowserRouter>
     <Nav totalItems={cart.total_items}/>
     <Route path ="/home" component={Main}/>
     <Route path ="/about" component={About}/>
     <Route path="/contacts" component={Contacts}/>
     <Route path="/catalog" component={Catalog}/>
     <Route path='/jackets' render={() => <Jackets products={products} onAddToCart={handleAddToCart}/>} />
     <Route path='/jeans' render={() => <Jeans products={products} onAddToCart={handleAddToCart}/>} />
    <Route path="/basket" render={() => <Cart cart={cart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}
    />}/>
    <Route path="/checkout" render={() => <Checkout cart={cart}/>}/>
     {/* <Foot/> */}
     </BrowserRouter>

  );
}

export default App;
