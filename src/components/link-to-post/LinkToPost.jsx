import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss'

const LinkToPost = (props) => {

    let { userId, title } = props.post

    return (
        <Link to = { props.to } className="link-to-post" >
            <div className="link-to-post__user-id">
                <h6>User Id: { userId } </h6>
            </div>
            <div className="link-to-post__title">
                <p> { title } </p>
            </div>
        </Link>
    );
};


LinkToPost.propTypes = {
    post : PropTypes.object,
    to : PropTypes.string
};


export default LinkToPost;
