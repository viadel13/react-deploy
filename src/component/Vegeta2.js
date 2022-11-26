import React, { Component } from 'react'
import CompteurCoups from './CompteurCoups'
import vegeta from '../images/vegetaIdle.png'


class Vegeta2 extends Component {

  render() {
    
    const{name}=this.props
    const{handleCoups}=this.props
    const{coups} = this.props

    return (
      <div className='col'>
        <img src={vegeta} alt="vegeta" width={200} height={320}/><br />

        <button className='btn btn-success mt-5' onClick={handleCoups}>{name} frappe</button>

        <table className=' table table-striped mt-4'>
            <thead>
                <tr>
                    <th scope='col'>Coups</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{coups}</td>
                </tr>
            </tbody>
        </table>

      </div>
    )
  }
}

export default CompteurCoups(Vegeta2)
