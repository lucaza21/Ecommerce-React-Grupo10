import React from 'react'

function UserList(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td> 
                <td>{props.name}</td> 
                <td>{props.lastname}</td> 
                <td>{props.email}</td> 
                <td>{props.address}</td> 
                <td>{props.avatar}</td> 
                <td>{props.nickname}</td> 
                <td>{props.birthday}</td> 
            </tr>
        </React.Fragment>
    )
}

export default UserList