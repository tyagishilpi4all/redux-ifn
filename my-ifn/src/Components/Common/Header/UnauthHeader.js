import React,{Component} from 'react';
import myImg from '../../../Assets/Images/logo.png'

export default class UnAuthHeader extends Component{

    openLogin=()=>{
       this.props.setStateHome("openSignup",true) 
    }

    render(){
        return(
            <React.Fragment>
                <section className="Header bg-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 logo">
                                <img src={myImg}/>
                            </div>
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-3">
                              <p className="mb-0" onClick={this.openLogin}>Log in</p>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx="true">
                  {
                      `.logo img{
                          height:50px;
                          width : 100px;
                          object-fit:cover;
                      }
                      `
                  }
                </style>

            </React.Fragment>
        )
    }
}