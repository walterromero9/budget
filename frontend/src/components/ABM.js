import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import movActions from '../redux/actions/movActions'
import { Button, Table,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2'
import Entry from './Entry';
import {Link} from 'react-router-dom'
const ABM = (props) => {
    useEffect(()=>{
        props.listMovs()
    },[])
    const movReverse = props.mov.reverse()

    return (
        <div>
         <Table>
      <thead className="thTable">
        <tr>
          <th>Concept</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Type</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
          {movReverse.map(({concept,amount,type,date,_id})=>{
              if(type==="Entry"){
                  return(
                <>
                <tr className="conceptABMR">
                    <td>
                        {concept}
                    </td>
                    <td>
                        {amount}
                    </td>
                    <td>
                        {date}
                    </td>
                    <td>
                        {type}
                    </td>
                    <td>
                    <Link to={`/edit/${_id}`}><Button>Edit</Button></Link>
                    </td>
                  </tr>
                  </>
                        )
              } else if(type ==="Egress"){
                return(
                    <>
                    <tr className="conceptABMG">
                        <td>
                            {concept}
                        </td>
                        <td>
                            -{amount}
                        </td>
                        <td>
                            {date}
                        </td>
                        <td>
                            {type}
                        </td>
                        <td>
                        <Link to={`/edit/${_id}`}><Button>Edit</Button></Link>
                        
                    </td>

                      </tr>
                      </>
                      )
                    }
          })}
      </tbody>
    </Table>

        </div>
    )
}


const mapStateToProps = state =>{
    return{
        mov: state.movs.mov
    }
}

const mapDispatchToProps = {
    listMovs: movActions.listMovs,
    removeMov: movActions.removeMov
}
export default connect(mapStateToProps,mapDispatchToProps)(ABM)
