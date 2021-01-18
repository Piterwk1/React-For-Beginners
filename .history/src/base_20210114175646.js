import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  //   apiKey: 'AIzaSyAn2eUsaU6neD-XQsFXLIQoFWxakLX76RI',
  //   authDomain: 'catch-of-the-day-piotrwk.firebaseapp.com',
  //   databaseURL:
  //     'https://catch-of-the-day-piotrwk-default-rtdb.europe-west1.firebasedatabase.app',

  apiKey: 'AIzaSyAn2eUsaU6neD-XQsFXLIQoFWxakLX76RI',
  authDomain: 'catch-of-the-day-piotrwk.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day-piotrwk-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'catch-of-the-day-piotrwk',
  storageBucket: 'catch-of-the-day-piotrwk.appspot.com',
  messagingSenderId: '1052803398439',
  appId: '1:1052803398439:web:affc7e99df6e4c2d404702',
  measurementId: 'G-VXFFSTDLKT',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
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
