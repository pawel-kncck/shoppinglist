import firebase from './firebase';

export const addNewList = (name, userId) => {
    const listsRef = firebase.firestore().collection('lists')
    const createdDate = new Date();

    listsRef.add({
        name: name,
        author: userId,
        users: [userId],
        createdAt: createdDate,
        status: 'active',
        items: []
    })
}

export const getAllLists = () => {
    const listsRef = firebase.firestore().collection('lists')
    
    return listsRef.get()
        .then(res => {
            return res
        })
        .catch(err => {
            throw err
        })
}

export const addUserToList = (listId, userId) => {
    const listRef = firebase.firestore().collection('lists').doc(listId)

    listRef.update({
        users: firebase.firestore.FieldValue.arrayUnion(userId),
    })
}

export const removeUserFromList = (listId, userId) => {
    const listRef = firebase.firestore().collection('lists').doc(listId)

    listRef.update({
        users: firebase.firestore.FieldValue.arrayRemove(userId),
    })
}

export const changeListStatus = (listId, status) => {
    const listRef = firebase.firestore().collection('lists').doc(listId)

    listRef.update({
        status: status,
    })
}