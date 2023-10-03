import React, { useState, useEffect } from 'react';
import { database } from '../server';
import { collection, getDocs } from "firebase/firestore";
import Link from "@mui/material/Link";
import RouteView from '../../routes/view/RouteView';
import './PostList.css'
function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetchData()
      }, [])
  
    function fetchData(){
      const postsCollectionRef = collection(database, 'posts')
      getDocs(postsCollectionRef).then(response => {
        const posts = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
        setPosts(posts)
      }).catch(error => console.log(error.message))
    }

  return (
    <div>
      <RouteView title="Popular posts" />
      <ul className='post-list'>
        {posts.map(post => (
            <Link key={post.id} href={`/posts/${post.data.title}`} >{post.data.title}</Link>
        ))}
      </ul>
    </div>
  );
}

export default PostList;