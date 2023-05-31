import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Posts = () => {
    let [posts, setPosts] = useState([])
    let [comments, setComments] = useState([])
    let [avatar, setAvatar] = useState('')
    let [isLoading, setIsLoading] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                setAvatar(response.data[0].thumbnailUrl)
            })
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setPosts(response.data)
            })
    }, [])

    function showComments(postId) {
        let commentsTemp = comments
        if (commentsTemp[postId]?.length) {
            commentsTemp[postId] = []
            setComments([...commentsTemp])
        } else {
            setIsLoading(postId)
            axios.get(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
                .then(function (response) {
                    commentsTemp[postId] = response.data
                    setTimeout(() => {
                        setComments([...commentsTemp])
                        setIsLoading('')
                    }, 2000)
                })
        }
    }

    return (<div className="App">
        <div className='postsContainer'>
            {posts.map(post => {
                return <div className='postItem' key={post.id}>
                    <div className='postImg'><Link to={`/details/${post.userId}`}><img src={`${avatar}`}/></Link></div>
                    <div>
                        <div className='postTitle'>{post.title}</div>
                        <div className='postText'>{post.body}</div>
                        <div className='postComments'>
                            <button onClick={() => showComments(post.id)}>Comments</button>
                            {isLoading === post.id
                                ? <Spinner animation="border"/>
                                : <ul>
                                    {comments[post.id]?.map((comment) => {
                                        return <li key={comment.id}>{comment.email} : {comment.body}</li>
                                    })}
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>);
}

export default Posts