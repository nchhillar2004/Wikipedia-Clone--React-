import React from 'react'
import './RouteView.css'

function RouteView(props) {
  return (
    <div className="route-view">
      <div className="left-side-route-view">
        <div className="heading">
            <h1>{props.title}</h1>
        </div>
        <div className="content">
            <p>{props.content}</p>
        </div>
        </div>
        <div className="right-side-route-view">
        </div>
    </div>
  )
}

export default RouteView