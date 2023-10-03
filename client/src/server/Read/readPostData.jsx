import React, { useEffect, useState } from "react";
import { database } from "../server";
import { collection, getDocs } from "firebase/firestore";
import RouteView from "../../routes/view/RouteView";
import { Route } from "react-router-dom";

export default function ReadPostData() {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetchData();
    }, [])

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    function fetchData() {
        const usersCollectionRef = collection(database, "posts");
        getDocs(usersCollectionRef)
            .then((response) => {
                const posts = response.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setPosts(posts);
            })
            .catch((error) => console.log(error.message));
    }

    return (
        <div className="readPostsData">
            {posts.map((post) => (
                <Route key={post.id} path={`/${post.data.title}`} exact>
                    <RouteView title={post.data.title} content={post.data.content} />
                </Route>
            ))}
            
        </div>
    );
}
