import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { addItemToList, removeItemFromList } from '../Database/db.items';
import firebase from '../Database/firebase';

const useStyles = makeStyles({
    root: {
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        background: '#e4f3f4',
        margin: '20px'
    },
    header: {
        padding: '15px',
        borderBottom: '1px solid #ccc',
    },
    listContainer: {
        padding: '10px 0',
        background: '#f0f9f9'
    },
    listItem: {
        padding: '10px 15px',
        transition: 'background 0.5s',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            background: '#e4f3f4'
        }
    },
    nameContainer: {
        flexGrow: 1,
    },
    addNew: {
        display: 'flex',
        borderTop: '1px solid #ccc',
        padding: '15px'
    },
    textField: {
        flexGrow: 1,
        marginRight: '20px'
    },
    button: {
        background: 'none',
        border: '1px solid #ccc',
        borderRadius: '2px',
        transition: 'background 0.3s',
        '&:hover': {
            background: '#fafafa'
        }
    }
})

const ListCard = ({ listObject }) => {
    const classes = useStyles();

    const [newItem, setNewItem] = useState('')

    const addItem = () => {
        addItemToList(listObject.id, firebase.auth().currentUser.uid, newItem);
        setNewItem('');
    }

    const removeItem = (event) => {
        removeItemFromList(listObject.id, event);
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                {listObject.name}
            </div>
            <div className={classes.listContainer}>
                {listObject.items.map(itemObject => {
                    return (
                        <div className={classes.listItem} key={itemObject.id}>
                            <div className={classes.nameContainer}>{itemObject.name}</div>
                            <div className={classes.deleteContainer}><button className={classes.button} onClick={() => removeItem(itemObject)}>X</button></div>
                        </div>
                    )
                })}
            </div>
            <div className={classes.addNew}>
                <TextField fullWidth placeholder="New item" value={newItem} onChange={(e) => setNewItem(e.target.value)} className={classes.textField}></TextField>
                <Button variant="outlined" type="text" onClick={addItem}>Add</Button>
            </div>
        </div>
    );
}

export default ListCard;