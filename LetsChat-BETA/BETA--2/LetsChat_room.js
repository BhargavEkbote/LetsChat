
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+" </div> <hr> ";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addRoom() 
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "LetsChat_page.html"
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "LetsChat_page.html";
}

