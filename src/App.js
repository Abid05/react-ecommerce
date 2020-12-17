import React, {useState, useEffect} from 'react'
import HomePage from './pages/homepage/home.component'; 
import {BrowserRouter,  Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignAndSignUp from './components/signin-and-signup/sign-in-and-sign-up.component';
import {auth} from '../src/firebase/firebase.utils';
const App = () => {
    let unsubscribeFromAuth = null;
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() =>{
        unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
            setCurrentUser(user); 
            console.log(user)
        })
        return () => {
             unsubscribeFromAuth();
        } 
    })
    return (
        
        <>

        <div className="container"> 
        <BrowserRouter>
        <Header currentUser={currentUser}/>
        <Switch>
        <Route exact component={HomePage} path="/"/>  
        <Route exact component={ShopPage} path="/shop"/>  
        <Route exact component={SignAndSignUp} path="/signin"/>  

        </Switch>
        </BrowserRouter>
        </div>
        </>
    )
}
export default App;