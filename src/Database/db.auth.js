import firebase from './firebase'

export const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            return res
        })
        .catch(err => {
            throw err
        });
}

export const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            return res
        })
        .catch(err => {
            throw err
        });
}