import React from 'react'
import RouteView from '../view/RouteView'
import scanner from '../../assets/scanner.jfif'

function Donate() {
  return (
    <div className="donate">
      <RouteView title="Donate" content="Thank you for considering a donation to the Wikipedia, the nonprofit that hosts Wikipedia and other crucial free knowledge projects."/>
      <img src={scanner} width={250}></img>
    </div>
  )
}

export default Donate