import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LinkToPost from '../link-to-post/LinkToPost'

const ContainerPostList = () => {

    let [ list, setList ] = useState([])

    useEffect(() => {
        console.log("post list container update")
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setList(res.data))
        .catch(err => console.log(err))

    }, [])

    return (
        <div >
            <h3>Post List</h3>
            <div 
                style={{
                    maxHeight : "500px",
                    overflowY : "scroll",
                    padding : "10px" 
                }}
            >
                {
                    list.map(post => (
                        <LinkToPost 
                            key = { post.id }
                            post = { post } 
                            to = { `/post/${post.id}` }
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ContainerPostList;
