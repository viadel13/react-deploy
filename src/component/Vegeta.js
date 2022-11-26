import { memo } from 'react';
import vegetaIdle from '../images/vegetaIdle.png';
import gokuAttack from '../images/gokuAttack.png';

function Vegeta({imgAttackG, enAttack}) {

    const border = {
        border : '1px solid blue',
        width : '200px',
        margin : '0 auto',
        fontSize : '30px',
        textShadow:'1px 2px 2px green',
        boxShadow : '1px 2px 2px blue'
    }

    
    const verif = imgAttackG !== ''

        ? <img src={gokuAttack} alt="gokuAttack" width={200} height={320}/>
        
        : enAttack === false 
        
        ? (<div className="mt-5 at" style={border}>ATTAQUE !!!</div>) 
        
        : <img src={vegetaIdle} alt="vegetaIdle" width={200} height={320}/>

    return verif

}

export default memo(Vegeta);
