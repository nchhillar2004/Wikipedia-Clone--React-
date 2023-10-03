import React, {useState} from 'react'
import RouteView from './view/RouteView'
import { database } from '../server/server'
import { addDoc,collection} from 'firebase/firestore';
import './Post.css'

function Post() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [subheading, setSubheading] = useState('');
  const [subcontent, setSubcontent] = useState('');

  function handleCreatePost(e){
    e.preventDefault()
    const postsCollectionRef = collection(database, 'posts');
    addDoc(postsCollectionRef, {title: title,
      content: content,
      subheading: subheading,
      subcontent: subcontent,}).then(response => {
      console.log(response.id)
      // Display "Posted successfully" for 3 seconds
      alert('Posted successfully');
      
      // Redirect to the desired URL after 3 seconds
      setTimeout(() => {
        window.location.href = 'https://wiki.nishantchhillar.tech/posts/';
      }, 2000); // 3000 milliseconds (3 seconds
    }).catch(error =>{
      console.log(error.message)
    })
  }
  return (
    <div className="post">
      <RouteView title="Create a post" content="Create a post now and contribute to the community."/>
      <div className="create-post-container">
        <form onSubmit={handleCreatePost}>
          <input placeholder='Title' type='text' id='posttitle' value={title} onChange={ e => setTitle(e.target.value) } required></input>
          <input placeholder='Content' type='text' id='content' value={content} onChange={ e => setContent(e.target.value) } required></input>
          <input placeholder='Sub heading ' type='text' id='sub-heading' value={subheading} onChange={(e) => setSubheading(e.target.value)} required></input>
          <input placeholder='Sub heading content' type='text' id='sub-content' value={subcontent} onChange={ e => setSubcontent(e.target.value) } required></input>
          <button type='submit'>Post</button>
        </form>
      </div>
    </div>
  )
}

export default Post