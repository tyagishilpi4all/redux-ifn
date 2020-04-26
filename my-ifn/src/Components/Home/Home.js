import React,{Component} from 'react';
import UnAuthHeader from '../Common/Header/UnauthHeader';
import SignUpModal from '../Modal/signUpModal'

export default class Home extends Component{

    state={
        openSignup : false
    }

    setStateHome=(name , state)=>{
        this.setState({
            [name] : state
        })
    }

    render(){
        const {openSignup} = this.state;
        return(
            <React.Fragment>

                {
                  openSignup?<div>
                      <SignUpModal />
                  </div>:"" 
                }
                <UnAuthHeader setStateHome={this.setStateHome}/>
                <h3>Shilpi here</h3>
            </React.Fragment>
        )
    }
}