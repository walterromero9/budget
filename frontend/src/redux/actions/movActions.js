import axios from 'axios'
import Swal from 'sweetalert2'
const error = (text) =>{
    Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: text,
        showConfirmButton: false,
        timer: 4000
      })
}
const movActions = {

    newMov: mov =>{
        return async (dispatch,getState) =>{
            
            const token = getState().auth.loggedUser ? getState().auth.loggedUser.token : ""
            
            try{
                const data = await axios.post('http://budge-online.herokuapp.com/api/newMov', mov,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                    
                })
                dispatch({type: 'NEW_MOV',payload: data.data}) 
            } catch(err){
                if(err.response.status === 401){
                    error("Error adding movements")
                    
                }
            }
        }
    },
    listMovs: ()=>{
        return async (dispatch,getState) =>{
            const token = getState().auth.loggedUser ? getState().auth.loggedUser.token : ""
            try{
                const data = await axios.get('http://budge-online.herokuapp.com/api/mov/:userId',{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type:'LIST_MOVS',payload: data.data.respuesta}) 
            } catch(error){
                if(error.response.status === 401){
                    
                    error("Error getting data")
                    
                }
            }
        }
    },
    removeMov: _id=>{
        
        return async (dispatch,getState) =>{

            const token = getState().auth.loggedUser ? getState().auth.loggedUser.token : ""
            try{
                const data = await axios.delete('http://budge-online.herokuapp.com/api/mov/'+_id,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type:'REMOVE_MOV',payload: data.data}) 
            } catch(error){
                error("Something went wrong, try again later")
            }
        }

    },
    editedMov:(_id,newEdited)=>{
            return async (dispatch, getState) =>{

                try{
                    
              const data = await axios.put(`http://budge-online.herokuapp.com/api/mov/${_id}`,newEdited)
                dispatch({type: 'EDITED_MOV', payload: data.data})
            } catch{
                error("Error,try again later")
            }

            
        }
    },
}

export default movActions