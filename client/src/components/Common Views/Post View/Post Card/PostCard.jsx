import React from 'react'
import './PostCard.css'

function PostCard(props) {
  return (
    <div className='post-card'>
      <p>{props.title}</p>
      <img src={props.image} alt={`${props.title} photo`}></img>
      <br></br>
      <hr></hr>
      <div className='post-card-bottom'>
        <div>
      <b>{props.infoName} : </b><p>{props.infoContent}</p></div>
      <div>
      <b>{props.infoName2} : </b><p>{props.infoContent2}</p></div>
      </div>
    </div>
  )
}

export default PostCard