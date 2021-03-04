import React,{useState} from 'react'
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Swal from 'sweetalert2'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    function byebye(){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'See you soon!'
          })
        props.logOut()
    }
    if(props.loggedUser){
        var links =
            <>
            <Link className="home" to="/home">Home</Link>
            <Link className="home" to="/" onClick={byebye}>LogOut</Link>
            </>
        
    } else{
        var links =
        <>
            <Link className="signIn" to="/signin" >Sign In</Link>
            <Link className="signUp" to="/signup">Sign Up</Link>
        </>
    }
    return (
        <>
            <header className="containerHeader">
                <Link to="/"><h1>Budget Online</h1></Link>
                

            <Navbar color="faded" light>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink >{links}</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            

            </header>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        loggedUser: state.auth.loggedUser
    }
}
const mapDispatchToProps = {
    logOut: userActions.logOut
}
export default connect(mapStateToProps,mapDispatchToProps) (Header)