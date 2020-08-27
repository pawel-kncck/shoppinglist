import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCahJ9C-K7N3J6k_fgpMZQhV5f_j_bTZ-k",
    authDomain: "shoppinglist-c2014.firebaseapp.com",
    databaseURL: "https://shoppinglist-c2014.firebaseio.com",
    projectId: "shoppinglist-c2014",
    storageBucket: "shoppinglist-c2014.appspot.com",
    messagingSenderId: "755590913113",
    appId: "1:755590913113:web:6a3ed65f19e743e8052548"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export  {
    storage, firebase as default
}
