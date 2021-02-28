import userActions from '../actions/userActions'
const initialState = {
    loggedUser: null
}

const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'LOG_USER':
            localStorage.setItem('name',action.payload.respuesta.name)
            localStorage.setItem('token',action.payload.respuesta.token)
            
            return{
                ...state,
                loggedUser:action.payload.respuesta
            }
            case 'LOG_OUT_USER':
                localStorage.clear()
                return{
                    ...state,
                    loggedUser:null
                }
        default:
                return state
    }
}

export default authReducer