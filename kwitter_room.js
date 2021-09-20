
//ADD YOUR FIREBASE LINKS HERE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyC1ElHYTE4VBls9sEBm7YtGdg2pLtPs5OY",
      authDomain: "kwitter-c36f0.firebaseapp.com",
      databaseURL: "https://kwitter-c36f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-c36f0",
      storageBucket: "kwitter-c36f0.appspot.com",
      messagingSenderId: "1064987014967",
      appId: "1:1064987014967:web:bfc1c513a6d21492160cb2",
      measurementId: "G-GJ8Y0YD3B2"
    };
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}