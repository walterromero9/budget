import movActions from '../actions/movActions'
import Swal from 'sweetalert2'

const initialState = {
    mov: []
}

const movReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'NEW_MOV':
            action.payload ? Swal.fire({
                icon: 'success',
                title: 'You added a move!',
                showConfirmButton: false,
                timer: 2000
              }) : Swal.fire({
                icon: 'error',
               title: 'An error occurred! try again later',
                showConfirmButton: false,
                timer: 3000
              })
            return state
        case 'LIST_MOVS':
            return {
                ...state,
                mov:action.payload,
                
            }
        case 'REMOVE_MOV':
              return state
        case 'EDITED_MOV':
            console.log(action.payload)
        return state
        default:
            return state
    }
}

export default movReducer