import axios from 'axios'
import Swal from 'sweetalert2'

const userActions = {
    nuevoUsuario: newUser =>{
        return async (dispatch, getState) =>{
            const respuesta = await axios.post('http://budge-online.herokuapp.com/api/signup', newUser)
            dispatch({type: 'LOG_USER', payload: respuesta.data})
        }
    },
    logOut: ()=>{
    return (dispatch,getState) =>{
        dispatch({type:'LOG_OUT_USER'})
    }
    },
    logInUser: user =>{
        return async (dispatch, getState) =>{
            const respuesta = await axios.post('http://budge-online.herokuapp.com/api/signin', user)
            if(!respuesta.data.success){
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload:respuesta.data})
        }
    },
    logFromLS: (token) =>{
        return async (dispatch, getState) =>{
            try{            
                const respuesta = await axios.post('http://budge-online.herokuapp.com/api/user/ls', {token},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
                })
                
                dispatch({type:'LOG_USER', payload:{respuesta: {...respuesta.data.respuesta}}})
            } catch(error){
                if (error.response.status === 401){
                    Swal.fire({
                        icon: 'question',
                       title: 'It seems like you ve lost yourself',
                        showConfirmButton: false,
                        timer: 3000
                      })

                }
                localStorage.clear()
                window.location.reload();
            }

        }
    }
}
export default userActions