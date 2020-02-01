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


// //email/password registration
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

var email = "";
var password = "";
var inputName = "";
var inputUsername = "";

$("#getStartedButton").on("click", function (event) {
  
  console.log("clicked submit")
  
  email = $("#inputEmail1").val().trim();
  password = $("#inputPassword6").val().trim();
  inputName = $("#inlineFormInputName").val().trim();
  inputUsername = $("#inlineFormInputGroupUsername").val().trim();


  if (password.length >=8 && password.length <= 20) {
    event.preventDefault();
    
    console.log(email)
    console.log(password)
    console.log(inputName)
    console.log(inputUsername)

    //email/password registration
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      
      database.ref().push({
        userEmailDB: email,
        userPasswordDB: password,
        inputNameDB: inputName,
        inputUsernameDB: inputUsername
      });



    });
    console.log("FB errMsg: ", errorMessage)

    
    
    // $(location).attr('href', "myGamesFirebaseTest.html");
    
  } else {

    //triggers modal:
    $('#passwordModal').on('shown.bs.modal', function () {
      $('#passwordModal').trigger('focus')

    })

  }



});

