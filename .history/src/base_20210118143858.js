import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAdN9joakr8re7l1xIJz69yLrIdhKnQlmc',
  authDomain: 'catch-of-the-day-piotrwk-36eb1.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day-piotrwk-36eb1-default-rtdb.firebaseio.com',
  projectId: 'catch-of-the-day-piotrwk-36eb1',
  storageBucket: 'catch-of-the-day-piotrwk-36eb1.appspot.com',
  messagingSenderId: '1058978518802',
  appId: '1:1058978518802:web:d71729cfb839c27e71c5cb',
  measurementId: 'G-G0EXED1WGW',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAn2eUsaU6neD-XQsFXLIQoFWxakLX76RI",
//     authDomain: "catch-of-the-day-piotrwk.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-piotrwk-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "catch-of-the-day-piotrwk",
//     storageBucket: "catch-of-the-day-piotrwk.appspot.com",
//     messagingSenderId: "1052803398439",
//     appId: "1:1052803398439:web:affc7e99df6e4c2d404702",
//     measurementId: "G-VXFFSTDLKT"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

// cath of the day 2
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAdN9joakr8re7l1xIJz69yLrIdhKnQlmc",
//     authDomain: "catch-of-the-day-piotrwk-36eb1.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-piotrwk-36eb1-default-rtdb.firebaseio.com",
//     projectId: "catch-of-the-day-piotrwk-36eb1",
//     storageBucket: "catch-of-the-day-piotrwk-36eb1.appspot.com",
//     messagingSenderId: "1058978518802",
//     appId: "1:1058978518802:web:d71729cfb839c27e71c5cb",
//     measurementId: "G-G0EXED1WGW"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

// firebase rules
// {
//   "rules": {
//     ".read": "now < 1613516400000",  // 2021-2-17
//     ".write": "now < 1613516400000",  // 2021-2-17
//   }
// }
