import React, { useState, useEffect } from 'react';
import firebase from '../Database/firebase';
import ListCard from './ListCard';

const Lists = () => {
    const [lists, setLists] = useState();

    useEffect(() => {
        firebase.firestore().collection('lists').onSnapshot(snapshot => {
            let listArray = [];
            snapshot.forEach(doc => {
                listArray.push({...doc.data(), id: doc.id})
            })
            setLists(listArray);
        })
    },[])

    return (
        <div>
            {lists
                ? lists.map(list => {
                    return <ListCard listObject={list} />
                })
                : null
            }
        </div>
    );
}
 
export default Lists
