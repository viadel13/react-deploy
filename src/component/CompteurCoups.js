import { Component } from "react";

const CompteurCoups = (WrappedComponent) =>{

    class Compteur extends Component{

        state={
            coups : 0
        }
    
        handleCoups = ()=>{
            let i = this.state.coups
            this.setState({
                coups : i += 1
            })
        }
    
        render(){
            return <WrappedComponent handleCoups={this.handleCoups} coups={this.state.coups} {...this.props}/>
        }
    }
    return Compteur

}

export default CompteurCoups;