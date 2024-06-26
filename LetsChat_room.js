/*!
 * This file is part of LetsChat.
 * 
 * LetsChat is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 2.1 of the License, or
 * (at your option) any later version.
 * 
 * YourLibrary is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with LetsChat. If not, see <http://www.gnu.org/licenses/>.
 */

firebaseConfig = {
  apiKey: "AIzaSyDCKd9OXejZ-0PK729riphOd6Z1KgrzjCo",
  authDomain: "letschattestbranch.firebaseapp.com",
  databaseURL: "https://letschattestbranch-default-rtdb.firebaseio.com/",
  projectId: "letschattestbranch",
  storageBucket: "letschattestbranch.appspot.com",
  messagingSenderId: "1048525961569",
  appId: "1:1048525961569:web:83583f3ab3a726da266d20"
}



  firebase.initializeApp(firebaseConfig);

// Function to safely escape HTML characters
function escapeHTML(html) {
  var element = document.createElement('div');
  if (html) {
      element.innerText = html;
      return element.innerHTML;
  }
  return '';
}

let user_name = localStorage.getItem("user_name");
let escaped_user_name = escapeHTML(user_name);

document.getElementById("user_name").innerHTML = "Welcome " + escaped_user_name + "!";

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
