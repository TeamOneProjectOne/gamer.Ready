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
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();
errorCode = "";
errorMessage = "";


//email/password login
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//   firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//   });

var database = firebase.database();

var userEmail = "";
var userPassword = "";
var inputName = "";
var inputUsername = "";

$("#getStartedButton").on("click", function (event) {
  
  console.log("clicked submit")
  
  userEmail = $("#inputEmail1").val().trim();
  userPassword = $("#inputPassword6").val().trim();
  inputName = $("#inlineFormInputName").val().trim();
  inputUsername = $("#inlineFormInputGroupUsername").val().trim();


  if (userPassword.length >=8 && userPassword.length <= 20) {
    event.preventDefault();
    
    console.log(userEmail)
    console.log(userPassword)
    console.log(inputName)
    console.log(inputUsername)
    
    // database.ref().push({
    //   userEmailDB: userEmail,
    //   userPasswordDB: userPassword,
    //   inputNameDB: inputName,
    //   inputUsernameDB: inputUsername
    // });
    
    // $(location).attr('href', "myGames.html");
    
  } else {

    //triggers modal:
    $('#passwordModal').on('shown.bs.modal', function () {
      $('#passwordModal').trigger('focus')

    })

  }



});

