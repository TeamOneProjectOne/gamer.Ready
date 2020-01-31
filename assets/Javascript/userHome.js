var firebaseConfig = {
  apiKey: "AIzaSyC_QkERVePK958PQ5mNF4CpsbJpXoi9MCc",
  authDomain: "gamerdotready.firebaseapp.com",
  databaseURL: "https://gamerdotready.firebaseio.com",
  projectId: "gamerdotready",
  storageBucket: "gamerdotready.appspot.com",
  messagingSenderId: "24970463108",
  appId: "1:24970463108:web:2d43535809d85ea1943fd1",
  measurementId: "G-SRQNTP3P9G"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

var userEmail = "";
var inputName = "";
var inputUsername = "";

database.ref().on("value", function(snapshot) {
    var sv = snapshot.val
    console.log(sv.userEmail)

})