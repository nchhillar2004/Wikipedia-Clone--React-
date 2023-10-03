import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Post from "./routes/Post";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";
import MainMenu from "./routes/menu/MainMenu";
import AboutUs from "./routes/menu/AboutUs";
import Donate from "./routes/menu/Donate";
import Contact from "./routes/menu/Contact";
import Help from "./routes/menu/Help";
import Developer from "./routes/menu/Developer";
import Terms from "./routes/menu/Terms";
import Privacy from "./routes/menu/Privacy";
import NotFound from "./routes/error/NotFound";
import ReadPostData from "./server/Read/readPostData";
import PostList from "./server/Read/PostsList";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./server/server";
import "./Body.css";
import PostView from "./routes/view/PostView";
import empty from './assets/empty.jpg'
function Body() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        const postsCollectionRef = collection(database, "posts");
        getDocs(postsCollectionRef)
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
        <div className="main-body">
            <div className="empty-space"></div>
            <div className="routes-container">
                <Routes>
                    <Route exact path="/" element={<MainMenu />} />
                    <Route path="/createpost" element={<Post />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/posts" element={<PostList />} />
                    {posts.map((post) => (
                        <Route key={post.id} path={`/posts/${post.data.title}`} element={<PostView title={post.data.title} content={post.data.content} subheading={post.data.subheading} subcontent={post.data.subcontent} time={post.data.time}  image={empty} infoName="infoname" infoContent="infocontent" infoName2="infoname2" infoContent2="infocontent2"/>} />
                    ))}
                    <Route element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default Body;
