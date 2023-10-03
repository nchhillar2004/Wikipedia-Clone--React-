import React from "react";
import "./RouteView.css";
import PostCard from "../../components/Common Views/Post View/Post Card/PostCard";

function PostView(props) {
    return (
        <div className="route-view">
            <div className="left-side-route-view">
                <div className="heading">
                    <h1>{props.title}</h1>
                </div>
                <div className="content-combo">
                    <div>
                    <p>{props.content}</p></div>
                    <div className="content-card-container">
                    <PostCard
                    title={props.title}
                    image={props.image}
                    infoName={props.infoName}
                    infoContent={props.infoContent}
                    infoName2={props.infoName2}
                    infoContent2={props.infoContent2}
                /></div>
                <hr></hr>
                </div>
                <div className="content">
                    <h4>{props.subheading}</h4>
                    <br></br>
                </div>
                <div className="content">
                    <p>{props.subcontent}</p>
                </div>
                <div className="post-content-footer">
                    <hr></hr>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    );
}

export default PostView;
