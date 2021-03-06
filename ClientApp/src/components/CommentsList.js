import React, { useState } from 'react';
import ProfileListItem from "./ProfileListItem";
import { getAddress } from "../Services";
import Comment from './Comment';
import "../Styles/Comments.css";

import { useSelector, useDispatch } from "react-redux";

/** 
 * This component is a container that holds all comments on a particular post
*/
const CommentsList = (props) => {
    const user = useSelector(state => state.user);
    const [text, setText] = useState('');

    const AddCommentHandler = ()=> { //create a new comment
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "PostId": props.postId,
        "Body": text
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${getAddress()}/api/post/comment/`, requestOptions)
        .then(response => {
            setText('');
            getComments();
        })
        .catch(error => console.log('error', error));
    }

    const getComments = ()=>{ //get all the comments of a post
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${getAddress()}/api/post/comments/${props.postId}`, requestOptions)
            .then(response => response.json())
            .then(result => props.setComments(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className="comments-list-container">
            <button className="btn btn-outline-danger" onClick={()=>props.setTrigger(false)} >Close Window</button>
            <br />
            <label>Comments on this post:</label>
            <div className="profile-follow-list">
                {props.comments.map(r => 
                <div>
                    <Comment postId={props.postId} body={r.body} key={r.id} id={r.id} userId={r.userId} name={r.userName} imagePath={r.userImagePath} ownedByUser={r.userId==user.uid} getComments={getComments}/>
                </div>)}
                <h3>{props.comments.length == 0? "No comments to this post": ""}</h3>
            </div>
            <div className="add-comment-container">
                <input style={{borderRadius:"1rem"}} type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                <button className="btn btn-primary" onClick={AddCommentHandler} >Add Comment</button>
            </div>
        </div>
        );
}

export default CommentsList;