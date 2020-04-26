import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {addData} from '../../store/action/index.action';
import firebaseIs from '../../Utils/fire'

 class SignUpModal extends Component{

    state={
        firstName : '',
        lastName : '',
        phone : '',
        signEmail : '',
        signPass : ''
    }

    handleOnChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signup=()=>{
        const{firstName,lastName,phone,signEmail,signPass} = this.state
        const that = this;
        /*********firebase sign up *********/
        firebaseIs.auth().createUserWithEmailAndPassword(signEmail, signPass)
        .then(result=>{
            console.log("signup result", result);

            /*********firebase token creation *********/

            firebaseIs.auth().currentUser.getIdToken().then(function(idToken) {
                const createdUserIs = {email:signEmail , phone_no:phone, first_name:firstName ,last_name:lastName, password:signPass,login_type: '', user_type:'',token:idToken}
                // console.log("idToken", idToken) 
                that.props.$addData(createdUserIs)               

            }).catch(function(error) {
                console.log("token error", error)
            });
     
           /*********firebase token creation *********/     
        })
        .catch(function(error) {
            console.log("errorCode",error)  
        }); 
              
        /*********firebase sign up *********/    
    }


    render(){
        console.log("data is -->",this.props._addReducer)

        const signUpData = [
            {type:"text" , placeholder : "firstName" , name : "firstName" , value : this.state.firstName},
            {type:"text" , placeholder : "lastName" , name : "lastName" , value : this.state.lastName},
            {type:"text" , placeholder : "phone number" , name : "phone" , value : this.state.phone},
            {type:"email" , placeholder : "enter email" , name : "signEmail" , value : this.state.signEmail},
            {type:"text" , placeholder : "enter password" , name : "signPass" , value : this.state.signPass}
        ]

        return(
            <React.Fragment>
                <div id="exampleModal" className="modaldemo formodel" role="dialog" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                <h5>Create an Account</h5>
                                </div>
                                <div className="modal-body">  
                                    {
                                        signUpData && signUpData.map((obj , index)=>(
                                            <div className="form-group mt-3" key={index}>
                                                <input type={obj.type} placeholder={obj.placeholder} className="form-control" onChange={this.handleOnChange} name={obj.name} value={obj.value}/>
                                            </div>
                                        ))
                                    }
                                    {/* <div className="form-group">
                                        <label>I'm here to</label>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="checkbox" value="Post Projects"/><label className="post"><p>Post Projects</p></label>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="checkbox" value="freelancer"/><label className="post"><p>I am freelancer</p></label>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" 
                                      onClick={this.signup}
                                    >Continue</button>
                                </div>
                                </div>
                            </div>
                         </div>


                <style jsx="true"> 
                   {
                    ` .formodel{
                        position:absolute;
                        top:30%;
                        width:80%;
                        left:50%;
                        right:50%;
                        z-index:99;
                        transform: translate(-50% ,-50%);                        
                        transition:2s
                      }
                    // .home-parent{
                    //     position:relative;
                    // }
                    `
                   }
                </style>
            </React.Fragment>
        )
    }
}

const mapState = ({ addReducer }) => {
    return {
      _addReducer: addReducer
    };
  };
  const mapDispatch = dispatchEvent => ({
    $addData: values => dispatchEvent(addData(values))
  });
  export default connect(mapState, mapDispatch)(SignUpModal);
