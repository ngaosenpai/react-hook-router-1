import React from 'react';

import { Switch, Route } from 'react-router-dom';
import PostContent from '../post-content/PostContent'

const ContainerPostContent = () => {
    return (
        <div style={{ width: "50%" }}>
            <h3>Post Detail</h3>
            <Switch>
                <Route path="/post/:id" >
                    <PostContent />
                </Route>
            </Switch>
        </div>
    );
};




export default ContainerPostContent;
