import React from 'react';
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Comments from "../../comments/Comments";
import {requestCommentsAction, requestCommentsDeleteAction} from "../../../redux/actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";

const Post = ({post, avatar}) => {
    const dispatch = useDispatch()
    const comments = useSelector(store => store.comments)?.filter(comment => comment.postId === post.id)
    const isLoading = useSelector(store => store.isLoading)

    function toggleComments() {
        if (!comments?.length) {
            dispatch(requestCommentsAction(post.id))
        } else {
            dispatch(requestCommentsDeleteAction(post.id))
        }
    }

    return (
        <div className='postItem' key={post.id}>
            <div className='postImg'>
                <Link to={`/details/${post.userId}`}>
                    <img src={`${avatar}`}/>
                </Link>
            </div>
            <div>
                <div className='postTitle'>{post.title}</div>
                <div className='postText'>{post.body}</div>
                <div className='postComments'>
                    <div>
                        <Button onClick={() => toggleComments()}>Comments</Button>
                    </div>
                    {isLoading && !comments?.length
                        ? <Spinner animation="border"/>
                        : <Comments comments={comments}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Post;