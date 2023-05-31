import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const UserDetails = () => {
    let [userDetails, setUserDetails] = useState({})
    let {userId} = useParams();
    let [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (responsive) {
                setUserDetails(responsive.data.find((user) => user.id === +userId))
            })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(function (response) {
                console.log('response.data', response.data)
                setTimeout(() => {
                    setUserPosts([...response.data])
                    console.log('userPosts1', userPosts)
                })
            })
    }, [userId])

    return (
        <div>
            <div>name: {userDetails?.name}</div>
            <div>username: {userDetails?.username}</div>
            <div>email: {userDetails?.email}</div>
            <div>
                address:
                <ul>
                    <li>street: {userDetails?.address?.street}</li>
                    <li>suite: {userDetails?.address?.suite}</li>
                    <li>city: {userDetails?.address?.city}</li>
                    <li>zipcode: {userDetails?.address?.zipcode}</li>
                    <li>geo:
                        <ul>
                            <li>lat: {userDetails?.address?.geo?.lat}</li>
                            <li>lng: {userDetails?.address?.geo?.lng}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>phone: {userDetails?.phone}</div>
            <div>website: {userDetails?.website}</div>
            <div>
                company:
                <ul>
                    <li>name: {userDetails?.company?.name}</li>
                    <li>catchPhrase: {userDetails?.company?.catchPhrase}</li>
                    <li>bs: {userDetails?.company?.bs}</li>
                </ul>
            </div>

            {userPosts.map(post => {
                return (
                    <div key={post.id}>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default UserDetails;