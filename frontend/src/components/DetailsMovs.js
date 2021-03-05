import React, {useState,useEffect} from 'react'
import { Button,Alert } from 'reactstrap';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import movActions from '../redux/actions/movActions'
import Swal from 'sweetalert2'
import ABM from './ABM';

const DetailsMovs = (props) => {
    const [editMov, setEditMov] = useState({})
    const [newEdited,setNewEdited] = useState({})
    const {id} = props.match.params
    const movi = props.mov.filter(movi => movi._id === id)
    useEffect(()=>{
        if(movi.length>0){
        setEditMov(movi[0]) 
        }
    },[movi])

    const capEntry = e =>{
        e.preventDefault()
        const campo = e.target.name
        const valor = e.target.value
        setNewEdited({
            ...newEdited,
            [campo] : valor,
        })
    }

    const success  = (icon,title,text) =>{
        Swal.fire({
            icon: icon,
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 2000
            })
    }
    const deleteMov =  async (_id) =>{
        await props.removeMov(_id)
        success("success",
            "OK",
            "Movement removed successfully!")
        props.history.push('/Entry')
   }
   const Edit = (_id) =>{
    if(!newEdited.concept || !newEdited.amount || !newEdited.date){
        success("error",
        "STOP!",
        "Please complete all fields.")
    } else{
        props.editedMov(_id,newEdited)
        success("success",
            "OK",
            "Successfully modified!")
        props.history.push("/Home")
    }

}

    return (
        <>     
        <div className="containerHome">
            <div className="infoHome">
                <div className="containerMoves">
                    <h3>Edit Movements</h3>
                    <form>
                        <input defaultValue={editMov.concept} type="text" name="concept"  onChange={capEntry} ></input>
                        <input defaultValue={editMov.amount} type="number" name="amount"  onChange={capEntry}></input>
                        <input  defaultValue={editMov.date}type="date" name="date" onChange={capEntry} ></input>
                        <Button color="danger" onClick={()=>deleteMov(editMov._id)}>Delete</Button>
                    </form>
                </div>
            </div>
            <div className="containerOperation">
                <Button color="dark" onClick={()=>Edit(editMov._id)} >Edit</Button>
            </div>
        </div>
        
        </>
    )
}
const mapStateToProps = state =>{
    return{
        mov: state.movs.mov
    }
}
const mapDispatchToProps = {
    listMovs: movActions.listMovs,
    removeMov: movActions.removeMov,
    editedMov: movActions.editedMov
}
export default connect(mapStateToProps,mapDispatchToProps) (DetailsMovs)
