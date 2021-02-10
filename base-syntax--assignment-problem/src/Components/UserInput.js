import React from 'react';

function UserInput(props) {

    return (
        <input type='text' onChange={props.nameChange} value={props.value}/>

    )
}

export default UserInput;