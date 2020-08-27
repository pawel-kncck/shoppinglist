import firebase from './firebase';
import { v4 as uuidv4 } from 'uuid';

export const addItemToList = (listId, userId, itemName) => {
    const listRef = firebase.firestore().collection('lists').doc(listId)

    const itemObject = {
        id: uuidv4(),
        name: itemName,
        userId: userId
    }

    listRef.update({
        users: firebase.firestore.FieldValue.arrayUnion(itemObject),
    })
}

export const removeItemFromList = (listId, itemObject) => {
    const listRef = firebase.firestore().collection('lists').doc(listId)

    listRef.update({
        users: firebase.firestore.FieldValue.arrayRemove(itemObject),
    })
}