var firebaseConfig = {
  apiKey: "AIzaSyBPZUiEMRgPvGLIUTS4uj5Xo-KevkPKEyY",
  authDomain: "letschat-5ee16.firebaseapp.com",
  databaseURL: "https://letschat-5ee16-default-rtdb.firebaseio.com",
  projectId: "letschat-5ee16",
  storageBucket: "letschat-5ee16.appspot.com",
  messagingSenderId: "387107900863",
  appId: "1:387107900863:web:db1abd76d239117913a50a"
};



  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "LetsChat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "LetsChat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
