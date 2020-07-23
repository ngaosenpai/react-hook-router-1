import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './style.scss'

const PostContent = () => {

    let { id } = useParams()
    let [ content, setContent ] = useState({})

    useEffect(() => {

        Axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }`)
        .then(res => setContent(res.data))
        .catch(err => console.log(err))

    }, [id])

    return (
        <div className="post">
            <div className="post__title">
                <h4> { content.title } </h4>
            </div>
            <div className="post__body">
                <p> { content.body } </p>
            </div>
        </div>
    );
};





export default PostContent;
