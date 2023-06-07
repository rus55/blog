import React, {useEffect, useState} from 'react'
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner'
import Paginate from "../pagination/Pagination"
import Search from "../search/Search"
import {useDispatch, useSelector} from "react-redux";
import Post from "./post/Post";
import {avatarAction} from "../../redux/actions/Actions";

const Posts = () => {
    const posts = useSelector(store => store.posts)
    const isPostsLoading = useSelector(store => store.isLoading)
    const hasPostsLoadingError = useSelector(store => store.isPostsFailed)
    const [renderedPosts, setRenderedPosts] = useState([])
    const [avatar, setAvatar] = useState('')
    const [error, setError] = useState('')
    const [countPages, setCountPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [value, setValue] = useState('')
    const countPosts = 5
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                setAvatar(response.data[0].thumbnailUrl)
                dispatch(avatarAction(response.data[0].thumbnailUrl))
            })
            .catch((reject) => {
                setError(reject.message)
            })
    }, [])

    useEffect(() => {
        if (value !== '') {
            setRenderedPosts(posts.filter(post => post.title.indexOf(value) !== -1))
        }
    }, [value])

    useEffect(() => {
        setRenderedPosts(posts)
        setCountPages(posts?.length / countPosts)
    }, [posts])

    const sortPosts = () => {
        const sortedPosts = renderedPosts.sort((postA, postB) => {
            if (postA.title > postB.title) return 1
            if (postA.title < postB.title) return -1
            return 0
        })
        setRenderedPosts([...sortedPosts])
    }
    const getValue = (e) => {
        setValue((prevState) => e.target.value)
    };

    const handleClick = () => {
        setValue('')
        setRenderedPosts(posts)
    };

    return (<div>
        <Search handleClick={handleClick} getValue={getValue} value={value} sortPosts={sortPosts}/>
        {posts?.length && !isPostsLoading
            ? <div className='postsContainer'>
                {renderedPosts?.filter((post, index) => index >= (currentPage - 1) * countPosts && index < currentPage * countPosts).map(post => {
                    return <Post key={post.id} post={post} avatar={avatar}/>
                })}
            </div>
            : hasPostsLoadingError ? <div>Failed to load posts</div> : <Spinner animation="border"/>
        }
        {error ? <div>{error}</div> : ''}

        {value === ''
            ? <Paginate
                countPages={countPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            : ''
        }
    </div>);
}

export default Posts