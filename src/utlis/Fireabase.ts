import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD5MoyH2G5U7hI52XsC3dGFQNiJ3ZqYOG8",
  authDomain: "spacex-dashboard-4e8f6.firebaseapp.com",
  projectId: "spacex-dashboard-4e8f6",
  storageBucket: "spacex-dashboard-4e8f6.appspot.com",
  messagingSenderId: "184243553604",
  appId: "1:184243553604:web:c9d15211399c08ff57c311",
  measurementId: "G-R3Q6Q68HBT"
}

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const db = app.database()