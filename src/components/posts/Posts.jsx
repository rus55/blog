import React, {useEffect, useState} from 'react'
import axios from "axios";

const Posts = () => {
    let [posts, setPosts] = useState([])
    let [comments, setComments] = useState([])
    let [avatar, setAvatar] = useState('')

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

    useEffect(() => {
        let commentsTemp = []
        Promise.all(posts.map((post) => {
            return axios.get(`https://jsonplaceholder.typicode.com/post/${post.id}/comments`)
        })).then(function (response) {
            response.map((item) => {
                commentsTemp[item.data[0].postId] = item.data || []
            })
            setComments(commentsTemp)
        })
    }, [posts.length])

    return (<div className="App">
        <div className='postsContainer'>
            {posts.map((post) => {
                return <div className='postItem' key={post.id}>
                    <div className='postImg'><img src={`${avatar}`}/></div>
                    <div>
                        <div className='postTitle'>{post.title}</div>
                        <div className='postText'>{post.body}</div>
                        <div className='postComments'>
                            <ul>
                                {comments[post.id]?.map((comment) => {
                                    return <li key={comment.id}>{comment.body}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>);
}

export default Posts