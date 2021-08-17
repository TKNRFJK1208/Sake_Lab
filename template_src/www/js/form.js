// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJHFJ8v02f15-nSUnnf1x9jubOEjTzU1g",
  authDomain: "sake-lab.firebaseapp.com",
  projectId: "sake-lab",
  storageBucket: "sake-lab.appspot.com",
  messagingSenderId: "226056304605",
  appId: "1:226056304605:web:8018ebca01963528682834"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

function signUp(){
  var email= document.getElementById("email")
  var password= document.getElementById("password")

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up!");
}

function signIn(){
  var email= document.getElementById("email")
  var password= document.getElementById("password")

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed In " + email.value + "!");

  navPage()
};

function signOut(){

  auth.signOut();
  alert("Signed Out!");
}

auth.onAuthStateChanged(function(user){
  if(user){

    var email = user.email;
    alert("Active User " + email);
    // is signed in 
  } else {
    alert("No Active User");
    // no user is signed in
  }
});