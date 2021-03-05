import React, {useEffect,useState} from 'react'
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import movActions from '../redux/actions/movActions';
const Home = (props) => {
    var positive  = props.mov.reduce((sum,value) => (value.type == "Entry" ? sum + value.amount : sum), 0)
    var negative = props.mov.reduce((res,value) => (value.type == "Egress" ? res - value.amount : res), 0)
    var total = (positive + negative)
    var valores = props.mov
    var valoresNew = valores.slice(valores.length-10)
      useEffect(()=>{
        props.listMovs()
    },[])
if (valoresNew.length === 0 ) {
    return(
        <div className="noMovements">
            <div >
                <h5>You still have no movements</h5>
                <div className="containerOperation">
                    <Link to="/entry"><Button color="dark">Entry/Egress</Button></Link>
                </div>
            </div>

        </div>
    )
}
    return (
        <div className="containerHome">
            <div className="infoHome">
                <h3 className="lastMoves">LAST MOVES</h3>
                <div className="containerMoves">

                {valoresNew.map(({concept,amount,type,_id})=>{
                   
                    if( type === "Entry"){
                    return(
                        <div>
                        <p className="conceptEntry" key={_id}>{concept} ${amount}</p>
                        
                    </div>
                         )
                    } else if(type ==="Egress"){
                        return(
                            <div>
                            <p className="conceptEgress">{concept}  $ - {amount}</p>
                            
                        </div>
                        )
                    } 
            })}
                </div>
            </div>
            <div className="containerBalance">
                <p>Current Balance: {total}</p>
            </div>
            <div className="containerOperation">
                <Link to="/entry"><Button color="dark">Entry/Egress</Button></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        mov: state.movs.mov
    }
    
}
const mapDispatchToProps = {
    listMovs: movActions.listMovs
}

export default connect(mapStateToProps,mapDispatchToProps) (Home)