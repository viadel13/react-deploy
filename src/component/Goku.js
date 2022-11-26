import React, { Component } from 'react';
import gokuIdle from '../images/gokuIdle.png';
import vegetaAttack from '../images/vegetaAttack.png'

class Goku extends Component {

    render() {
        
        const border = {
            border : '1px solid blue',
            width : '200px',
            margin : '0 auto',
            fontSize : '30px',
            textShadow:'1px 2px 2px green',
            boxShadow : '1px 2px 2px blue'
        }
    

        const verif = this.props.imgAttackV !== ''
            ? <img src={vegetaAttack} alt="vegetaAttack" width={200} height={320}/>
            
            : this.props.enAttack === true 
            
            ? (<div className="mt-5 at" style={border}>ATTAQUE !!!</div>) 
            
            : <img src={gokuIdle} alt="gokuIdle" width={200} height={320}/>

        return verif
    }

}

export default Goku
