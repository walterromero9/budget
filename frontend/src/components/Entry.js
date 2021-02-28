import React, {useState} from 'react'
import { Button,Alert } from 'reactstrap';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import movActions from '../redux/actions/movActions'
import Swal from 'sweetalert2'
import ABM from './ABM';
const Entry = (props) => {
    const [newEntry,setNewEntry] = useState({})
    const capEntry = e =>{
        e.preventDefault()
        const campo = e.target.name
        const valor = e.target.value
        setNewEntry({
            ...newEntry,
            [campo] : valor,
        })
    }

    const sendEntry = e =>{
        e.preventDefault();
    if(!newEntry.concept || !newEntry.amount || !newEntry.date || !newEntry.type){
        Swal.fire({
          icon: 'error',
          title: 'Please complete all fields.',
          showConfirmButton: false,
          timer: 4000
        }) }else {
            props.newMov(newEntry)
            props.history.push('/home')
        }
       

    }
    return (
        <>
        <div className="containerHome">
            <div className="infoHome">
                <div className="containerMoves">
                    <h3>Add Movements</h3>
                    <form>
                        <input type="text" name="concept" placeholder="Concept" onChange={capEntry} required="true"></input>
                        <input type="number" name="amount" placeholder="Amount" onChange={capEntry}></input>
                        <input type="date" name="date" onChange={capEntry} ></input>
                        <select name="type" onChange={capEntry} className="selectType">
                            <option value="" disabled selected>Select type</option>
                            <option>Entry</option>
                            <option>Egress</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="containerOperation">
                <Link to="/entry"><Button color="dark" onClick={sendEntry}>Send</Button></Link>
            </div>
        </div>
        <ABM/>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        mov: state.movs.mov
    }
    
}
const mapDispatchToProps = {
    newMov: movActions.newMov
}
export default connect(mapStateToProps,mapDispatchToProps) (Entry)