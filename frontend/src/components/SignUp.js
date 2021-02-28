import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import userActions from '../redux/actions/userActions';
import GoogleLogin from 'react-google-login'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
const SignUp = (props) => {

const [newUser, setNewUser] = useState({})

const capSignUp = e =>{
    e.preventDefault()
    const campo = e.target.name
    const valor = e.target.value
    setNewUser({
        ...newUser,
        [campo] : valor
    })
}

const catchSignUp = (icon,title) =>{
    Swal.fire({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1000
      })
}

const register = async e =>{
    e.preventDefault()
    if(!newUser.name || !newUser.lastName || !newUser.email || !newUser.password){
        catchSignUp("error",'Please complete all fields.')
    }else {
            const respuesta = await props.newUser(newUser)
            if(respuesta && !respuesta.success){
                alert("Error")
            } else{
                props.history.push("/home")
            }
        }
        

}
const responseGoogle = async (response) => {
    
    if(response.error){
        catchSignUp("error",'An error occurred, please try again later.')
    } else{
        const respuesta = await props.newUser({
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            lastName: response.profileObj.familyName,
            name: response.profileObj.givenName
        })
        
        if(respuesta && !respuesta.success){
            catchSignUp("error",'An error occurred, please try again later.')
           }else{
            catchSignUp("success",'Account Created successfully.')
               props.history.push('/home')
               
            }
    }

  }
    return (
        <div className="generalContainer">
            <div className="titleRegister">
                <h3>Register</h3>
            </div>
            <div className="containerRegister">  
                <form className="containerInput">
                    <input type="text" placeholder="Insert your First name" name="name" onChange={capSignUp}></input>
                    <input type="text" placeholder="Insert your Last name" name="lastName" onChange={capSignUp}></input>
                    <input type="text" placeholder="Insert your email" name="email" onChange={capSignUp}></input>
                    <input type="password" placeholder="Insert your password" name="password" onChange={capSignUp}></input>
                    <Button color="dark" onClick={register}>Register Now</Button>
                </form>
            </div>
            <div className="subReg">
                <Link to="/signin">
                <p>Do you already have an account? Log in here</p>
                </Link>
                
                </div>
            
            <div className="google">
                <GoogleLogin
                clientId="8788813292-urnpbfuh65ccki09tkpc6ru5h2q1jlcc.apps.googleusercontent.com"
                buttonText="Create account with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                 />
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        loggedUser: state.auth.loggedUser
    }
}
const mapDispatchToProps = {
    newUser: userActions.nuevoUsuario
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
