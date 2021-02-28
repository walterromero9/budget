import React, {useState} from 'react'
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import Swal from 'sweetalert2'
const SignIn = (props) => {
const [signIn, setSignIn] = useState({})

const capSignIn = e =>{
    e.preventDefault()
    const campo = e.target.name
    const valor = e.target.value
    setSignIn({
        ...signIn,
        [campo] : valor
    })
}
function catchLogin(icon,title) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: title
      })
}

const logIn = async e =>{
    e.preventDefault()

        const respuesta = await props.logInUser(signIn)
        if(respuesta && !respuesta.success){
            catchLogin("error",'An error occurred while logging in')
        } else{
            catchLogin("success",'Signed in successfully')
            props.history.push("/home")
        }
    

}
const responseGoogle = async (response) => {
    
    if(response.error){
        catchLogin("error",'An error occurred while logging in')
    } else{
        const respuesta = await props.logInUser({
            email: response.profileObj.email,
            password: response.profileObj.googleId
        })
        if(respuesta && !respuesta.success){
            catchLogin("error",'An error occurred while logging in')
           }else{
            catchLogin("success",'Signed in successfully')
               props.history.push('/home')
            }
    }

  }

    return (
        <>
            <div className="titleRegister">
                <h3>Log In</h3>
            </div>
            <div className="containerRegister">  
                <form className="containerInput">
                    <input type="text" placeholder="Insert your email" name="email" onChange={capSignIn}></input>
                    <input type="password" placeholder="Insert your password" name="password"onChange={capSignIn}></input>
                    <Button color="dark" onClick={logIn}>Log In</Button>
                </form>
            </div>
            <div className="subReg">
                <Link to="/signup">
                <p>Don't have account? Create one here!</p>
                </Link>
            </div>
            <div className="google">
                <GoogleLogin
                clientId="8788813292-urnpbfuh65ccki09tkpc6ru5h2q1jlcc.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                 />
            </div>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        loggedUser: state.auth.loggedUser
    }
    
}
const mapDispatchToProps = {
    logInUser: userActions.logInUser
}
export default connect(mapStateToProps,mapDispatchToProps) (SignIn)
