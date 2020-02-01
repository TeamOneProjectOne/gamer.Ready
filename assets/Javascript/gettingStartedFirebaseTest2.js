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

var database = firebase.database();

var email = "";
var password = "";
var inputName = "";
var inputUsername = "";

$(document).on("click", "#getStartedButton", function(event) {
  
  console.log("clicked submit")
  
  userEmail = $("#inputEmail1").val().trim();
  userPassword = $("#inputPassword6").val().trim();
  inputName = $("#inlineFormInputName").val().trim();
  inputUsername = $("#inlineFormInputGroupUsername").val().trim();



    
    console.log(userEmail)
    console.log(userPassword)
    console.log(inputName)
    console.log(inputUsername)
      
    //   database.ref().push({
    //     userEmailDB: userEmail,
    //     userPasswordDB: userPassword,
    //     inputNameDB: inputName,
    //     inputUsernameDB: inputUsername
    //   });
    
    $(location).attr("href", "/../../index.html");
    




});

