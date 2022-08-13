var firebaseConfig = {
      apiKey: "AIzaSyBsbfe2LdRKJ1tDvjyQCVDaozUuBRm3bCQ",
      authDomain: "kwitter-a4016.firebaseapp.com",
      databaseURL: "https://kwitter-a4016-default-rtdb.firebaseio.com",
      projectId: "kwitter-a4016",
      storageBucket: "kwitter-a4016.appspot.com",
      messagingSenderId: "483108591817",
      appId: "1:483108591817:web:bec83d0965d59948791518",
      measurementId: "G-CZ8SELKHQC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function addRoom() {
      room_name = document.getElementById("room_name").value; 
      
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" }); 

      localStorage.setItem("room_name", room_name); 
      
      window.location = "kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

