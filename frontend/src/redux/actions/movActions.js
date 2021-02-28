import axios from 'axios'
import Swal from 'sweetalert2'
const movActions = {
    newMov: mov =>{
        return async (dispatch,getState) =>{
            
            const token = getState().auth.loggedUser ? getState().auth.loggedUser.token : ""
            
            try{
                const data = await axios.post('http://localhost:4000/api/newMov', mov,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                    
                })
                dispatch({type: 'NEW_MOV',payload: data.data}) 
            } catch(err){
                if(err.response.status === 401){
                    alert("Error al agregar Movimientos")
                    
                }
            }
        }
    },
    listMovs: ()=>{
        return async (dispatch,getState) =>{
            const token = getState().auth.loggedUser ? getState().auth.loggedUser.token : ""
            try{
                const data = await axios.get('http://localhost:4000/api/mov/:userId',{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type:'LIST_MOVS',payload: data.data.respuesta}) 
            } catch(error){
                if(error.response.status === 401){
                    
                    alert("Error al obtener datos")
                    
                }
            }
        }
    },
    removeMov: _id=>{
        
        return async (dispatch,getState) =>{

            const token = getState().auth.loggedUser ? getState().auth.loggedUser.token : ""
            try{
                const data = await axios.delete('http://localhost:4000/api/mov/'+_id,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type:'REMOVE_MOV',payload: data.data}) 
            } catch(error){
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: "Algo salio mal. intente mas tarde.",
                    showConfirmButton: false,
                    timer: 4000
                  })
            }
        }

    },
    editedMov:(_id,newEdited)=>{
            return async (dispatch, getState) =>{

                try{
                    
              const data = await axios.put(`http://localhost:4000/api/mov/${_id}`,newEdited)
                dispatch({type: 'EDITED_MOV', payload: data.data})
            } catch{
                alert("error")
            }

            
        }
    },
}

export default movActions