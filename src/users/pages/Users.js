import React from 'react';
import UserList from '../components/UserList';

 const Users = () => {
    const USERS=[
        {id:'u1',
        name:'mohammed safi',
        image:'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg',
        places:3
       }]

    return (
       <UserList items={USERS}/>
    )
}
export default Users;
