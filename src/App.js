import React, { Component } from 'react'
import Goku2 from './component/Goku2'
import Vegeta2 from './component/Vegeta2'
// import Goku from './component/Goku'
// import Vegeta from './component/Vegeta'
// import vegetaAttack from './images/vegetaAttack.png'
// import gokuAttack from './images/gokuAttack.png'
// import vesus from './images/vesus.png'

class App extends Component {

  // state = {

  //   imgAttackGoku : '',
  //   imgAttackVegeta : '',
  //   vieGoku : 100,
  //   vieVegeta : 100,
  //   attackGoku : ''
  // }

  // attackGoku = ()=>{

  //   let chute = this.state.vieVegeta
  //   let monte = this.state.vieGoku

  //   this.setState({
  //     imgAttackGoku : {gokuAttack},
  //     attackGoku : true,
  //     imgAttackVegeta : '',
  //     vieVegeta : chute -= 1,
  //     vieGoku : monte += 1
  //   })
  // }
  // attackVegeta = ()=>{

  //   let chute = this.state.vieGoku
  //   let monte = this.state.vieVegeta

  //   this.setState({
  //     imgAttackVegeta : {vegetaAttack},
  //     attackGoku : false,
  //     imgAttackGoku : '',
  //     vieGoku : chute -= 1,
  //     vieVegeta :  monte += 1 
  //   })
  // }

  render() {
    return (
      <div className='container text-center'>
        <h1>Goku Vs Vegeta</h1><hr />
        <div className='row'>
          <Vegeta2 name="Vegeta"/>
          <Goku2 name="Goku" />
        </div>
        {/* <div className='row my-5'>
          
          <div className='col-12 col-md-4'>
            <p>
              <span 
                className={

                  this.state.vieGoku < 100 
                  ?"badge bg-danger fs-4" 
                  : this.state.vieGoku > 100 
                  ? "badge bg-success fs-4" 
                  : "badge bg-secondary fs-4"
                }>

                {this.state.vieGoku}pts
              
              </span>
            
            </p>
            <Goku enAttack={this.state.attackGoku} imgAttackV={this.state.imgAttackVegeta}/><br />
            <button className='btn btn-primary mt-4' onClick={this.attackGoku}>Attack</button>
          </div>

          <div className='col-12 col-md-4'>
            <img src={vesus} alt="vesus" width={250} />
          </div>

          <div className='col-12 col-md-4'>
               <p>
              <span 
                className={

                  this.state.vieVegeta < 100 
                  ?"badge bg-danger fs-4" 
                  : this.state.vieVegeta > 100 
                  ? "badge bg-success fs-4" 
                  : "badge bg-secondary fs-4"
                }>
                  
                {this.state.vieVegeta}pts
              
              </span>
            
            </p>
            <Vegeta enAttack={this.state.attackGoku} imgAttackG={this.state.imgAttackGoku}/><br />
            <button className='btn btn-primary mt-4' onClick={this.attackVegeta}>Attack</button>
          </div>
        
        </div> */}

      </div>

    )
  }
}

export default App
