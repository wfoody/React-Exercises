import React from 'react';

function UserOutput(props) {

    return (
        <div>
            <p>Hello World. My username is {props.username}.</p>
            <p>That's all, folks.</p>
        </div>
    )
}

export default UserOutput;