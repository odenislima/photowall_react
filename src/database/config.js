import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export { database };
