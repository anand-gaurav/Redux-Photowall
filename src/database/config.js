import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyD7ZTzOG5OU0D3oUBRhuKvPWoQNQDuB5EQ",
  authDomain: "photowall-c11cb.firebaseapp.com",
  databaseURL: "https://photowall-c11cb.firebaseio.com",
  projectId: "photowall-c11cb",
  storageBucket: "photowall-c11cb.appspot.com",
  messagingSenderId: "985134377543"
};

  firebase.initializeApp(config)
  const database = firebase.database()
  export {database}