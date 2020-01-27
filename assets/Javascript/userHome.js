var firebaseConfig = {
    apiKey: "AIzaSyATyfvW4ljW1OPganzWkNMXK7F_nMgzQPQ",
    authDomain: "fir-demo-33d93.firebaseapp.com",
    databaseURL: "https://fir-demo-33d93.firebaseio.com",
    projectId: "fir-demo-33d93",
    storageBucket: "fir-demo-33d93.appspot.com",
    messagingSenderId: "987132343245",
    appId: "1:987132343245:web:b050e90e84c0b398c38a84",
    measurementId: "G-MP2NW7NGV7"
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