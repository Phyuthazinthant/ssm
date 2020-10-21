import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Footer from "../app/components/Footer";
import Headers from '../app/components/Header';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ServicePage from '../pages/ServicePage';
import ToolPage from '../pages/ToolPage';
import ContactPage from '../pages/ContactPage';
import DiscountPage from '../pages/DiscountPage';
import LoanPage from  '../pages/LoanPage'


const MainRoute = (props) => {
    return(
        <div>
            <Headers />
           <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/tool" component={ToolPage} />
                <Route path="/discount/:id" component={DiscountPage} />
                <Route path='/contactus' component={ContactPage} />
                <Route path="/loan" component={LoanPage} />
                <Route path="/service" component={ServicePage} />
                <Route path="/convetor" component={LoanPage} />
                <Redirect to="/home" />
            </Switch>
             <Footer />
        </div>
    )
}

export default MainRoute;