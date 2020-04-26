 import React,{Component} from 'react';
import App from '../App';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom';
 import {Provider} from 'react-redux';
import store from '../store/index.store'

 export default class Index extends Component{
     
    render(){
        return(
            <BrowserRouter>
                <Provider store={store()}>
                    <App />
                </Provider>
            </BrowserRouter>
        )
    }
 }