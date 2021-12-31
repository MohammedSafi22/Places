import React from 'react'
import PlaceList from '../components/PlaceList'
import {useParams} from 'react-router-dom'

const DUMMY_PLACES=[
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Empire State Building Empire State Building Empire State Building',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1qgtglKIHpWo4zSDz8Zjoi6Qa70ZYCZz1A&usqp=CAU',
        address: '20 w 34th st, New York ,NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:'u1'
    },
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Empire State Building Empire State Building Empire State Building',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1qgtglKIHpWo4zSDz8Zjoi6Qa70ZYCZz1A&usqp=CAU',
        address: '20 w 34th st, New York ,NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:'u2'
    },
];




const UserPlaces = () => {
  const userId= useParams().userId;
  const loadedPlaces= DUMMY_PLACES.filter(place=>place.creator===userId);
    return (
       <PlaceList items={loadedPlaces}/>
    )
}

export default UserPlaces
