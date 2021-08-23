import axios from 'axios';
import dotenv from 'dotenv'

import firebase from "firebase/app";
import "firebase/auth";
dotenv.config()
firebase.initializeApp({
  apiKey: 'AIzaSyBeTvWJSllWxBEWbItehe2WhKs0YAjl6u4',
  authDomain: 'socialcircle-164c5.firebaseapp.com',
  projectId: 'socialcircle-164c5',
  storageBucket: 'socialcircle-164c5.appspot.com',
  messagingSenderId: '809693401158',
  appId: '1:809693401158:web:5da0c38d95aca1bed2fa47',
  measurementId: 'G-2Z133BFPFE'
});

function Login(data){
var url = 'http://127.0.0.1:8000/auth/social_login/';
axios.post(url,data).then(re=>{
    console.clear()
    alert(re.data.message)
    console.log(re.data)
}).catch(err=>{
    alert(err)
})
}

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
      console.clear()
    // console.log(res.user)
    var data = {
        social_id:res.user.uid,
        displayName:res.user.displayName,
        email:res.user.email,
        profile_image:res.user.photoURL,
        mobile:res.user.phoneNumber
    }
    console.log(data)
  }).catch((error) => {
    console.log(error.message)
  })
}

const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const signInWithFb = () => {
  auth.signInWithPopup(facebookProvider).then((res) => {
      console.clear()
    // console.log(res.user)
    // console.clear()
    var data = {
        social_id:res.user.uid,
        displayName:res.user.displayName,
        email:res.user.email,
        profile_image:res.user.photoURL,
        mobile:res.user.phoneNumber
    }
    Login(data)
    console.log(data)
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }