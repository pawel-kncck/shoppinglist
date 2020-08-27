import React, { useState, useEffect } from 'react';
import firebase from '../Database/firebase';
import ListCard from './ListCard';
import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    button: {
        margin: '20px'
    }
})

const Lists = () => {
    const [lists, setLists] = useState();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        firebase.firestore().collection('lists').onSnapshot(snapshot => {
            let listArray = [];
            snapshot.forEach(doc => {
                listArray.push({...doc.data(), id: doc.id})
            })
            setLists(listArray);
        })
    },[])

    const handleLogout = () => {
        firebase.auth().signOut();
        history.push('/login');
    }

    const handleLogin = () => {
        history.push('/login');
    }

    return (
        <div>
            {lists
                ? lists.map((list, index) => {
                    return <ListCard key={index} listObject={list} />
                })
                : null
            }
            {(firebase.auth().currentUser)
                ? <Button className={classes.button} onClick={handleLogout} variant="outlined">Logout</Button>
                : <Button className={classes.button} onClick={handleLogin} variant="outlined">Login</Button>
            }
        </div>
    );
}
 
export default Lists
